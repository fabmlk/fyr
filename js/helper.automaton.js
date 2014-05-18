/**
 * module resistor uses this automaton/graph to detect invalid color schemes based on current resistor state
 * @module helper.automaton
 */
define(["jquery", "helper.colorset"], function ($, ColorSet) {
    "use strict";

        // automaton states
    var STATE_ANY_SCHEME = 0x00, // no deterministic combination detected, the resistor can be either a 4-band or 5/6-band
        STATE_BAND_4 = 0x01, // 4-band only resistor state detected
        STATE_BAND_5 = 0x02, // 5/6-band only resistor state detected: note: 6-band is just a superset of 5-band without any restrictions
        STATE_FORBIDDEN = 0x03, // an invalid scheme path has been provided: this should never happen

        // building an automaton/graph for every possible colors combinations would be overkill
        // instead, we base our paths on forbidden combinations - way shorter
        band4ForbiddenSet = (function () {
            var tmp = {};
            tmp[ColorSet.BLACK] = [1, 4, 5, 6];
            tmp[ColorSet.WHITE] = [4, 5, 6];
            tmp[ColorSet.GOLD] = [1, 2, 5, 6];
            tmp[ColorSet.SILVER] = [1, 2, 5, 6];
            tmp["*"] = [5, 6];
            return tmp;
        }()),

        band5ForbiddenSet = (function () {
            var tmp = {};
            tmp[ColorSet.BLACK] = [1, 5, 6];
            tmp[ColorSet.GREEN] = [6];
            tmp[ColorSet.GREY] = [6];
            tmp[ColorSet.WHITE] = [5, 6];
            tmp[ColorSet.GOLD] = [1, 2, 3, 6];
            tmp[ColorSet.SILVER] = [1, 2, 3, 6];
            tmp["*"] = [];
            return tmp;
        }()),

        allForbiddenSet = {
            "*": [1, 2, 3, 4, 5, 6]
        },

        // here we will dynamically build our transition sets that will determine what inputs should set the automaton in a different state.
        // Using some "set operations" (fr: operations ensemblistes) from the 4-band and 5-band forbidden sets can build all other sets
        // WARNING: this is for dev only, in production, there is no need to do this dynamically, instead create a literal object as done above
        operationOnSets = function (R, S, op) {
            var propfilter, res = {};

            $.each(S, function (prop) {
                propfilter = R[prop] ? prop : '*';
                // PhantomJS doesn't support ES5 Array.prototype.bind(), use jQuery polyfill instead in dev
                // $.proxy(function, context, args to fix)
                res[prop] = R[propfilter].filter($.proxy(op, this, prop));
            });
            return res;
        },

        // R - S: band5ForbiddenSet - band4ForbiddenSet
        band5TransitionSet = operationOnSets(band4ForbiddenSet, band5ForbiddenSet, function (prop, elt) {
            return band5ForbiddenSet[prop].indexOf(elt) === -1;
        }),

        // R INTERSECT S
        bandAnyForbiddenSet = operationOnSets(band4ForbiddenSet, band5ForbiddenSet, function (prop, elt) {
            return band5ForbiddenSet[prop].indexOf(elt) !== -1;
        }),

        // R - S: band4ForbiddenSet - band5ForbiddenSet
        band4TransitionSet = operationOnSets(band5ForbiddenSet, band4ForbiddenSet, function (prop, elt) {
            return band4ForbiddenSet[prop].indexOf(elt) === -1;
        }),

        currentWorkingSet = (function () {
            var tmp = {};
            tmp[STATE_ANY_SCHEME] = bandAnyForbiddenSet;
            tmp[STATE_BAND_4] = band4ForbiddenSet;
            tmp[STATE_BAND_5] = band5ForbiddenSet;
            tmp[STATE_FORBIDDEN] = allForbiddenSet;

            return tmp;
        }());


    /**
     * An automaton for the resistor
     * @class Automaton
     * @constructor
     */
    return function () {
        // initial state on build
        var state = STATE_ANY_SCHEME,

            // determines if a given color 'color' at position 'position' is amongst the current workng set
            // 'this' will be the current working set
            isInSet = function (color, position) {
                var prop = this[color] ? color : '*';

                return this[prop].indexOf(position) !== -1;
            };


        /**
         * automaton's acceptor for a given color's position
         * @method acceptor
         * @param {Color} color the color
         * @param {Number} position the position
         * @return {Boolean} true if state is not STATE_FORBIDDEN
         */
        this.acceptor = function (color, position) {
            if (state === STATE_ANY_SCHEME) {
                if (isInSet.call(band5TransitionSet, color, position)) {
                    state = STATE_BAND_5;
                } else if (isInSet.call(band4TransitionSet, color, position)) {
                    state = STATE_BAND_4;
                }
            }
            if (isInSet.call(currentWorkingSet[state], color, position)) {
                state = STATE_FORBIDDEN;
            }

            return state !== STATE_FORBIDDEN;
        };

        /**
         * backtracks automaton from a band-4 only or band-5 only scheme to a band-any scheme.
         * It doesn't backtrack from a FORBIDDEN_STATE as an automaton is memory-less: it cannot know which insertion might have put it in a forbidden state
         * @method backtrack
         * @param {Color} color the color
         * @param {Number} position the position
         */
        this.backtrack = function (color, position) {
            var bool;
            if (state !== STATE_ANY_SCHEME) {
                // if the color and position is deterministic of a transition, then reversing it takes back to any scheme
                bool = STATE_BAND_4 && isInSet.call(band4TransitionSet, color, position);
                bool = bool || (state === STATE_BAND_5 && isInSet.call(band5TransitionSet, color, position));
                if (bool) {
                    state = STATE_ANY_SCHEME;
                }
            }
        };

        /**
         * reset automaton
         * @method reset
         */
        this.reset = function () {
            state = STATE_ANY_SCHEME;
        };

        /**
         * provides the list of forbidden colors given a position
         * @method getForbiddenColors
         * @param {Number} position the position
         * @return {Array} the list of forbidden colors
         */
        this.getForbiddenColors = function (position) {
            var res = [], set = currentWorkingSet[state], colors;

            $.each(set, function (prop, value) {
                if (value.indexOf(position) !== -1) {
                    // if wildcard is matched, we assign all remaining colors, i.e, all colors minus those already matched
                    if (prop === '*') {
                        colors = ColorSet.all().filter(function (color) {
                            return res.indexOf(color) === -1;
                        });
                    } else {
                        colors = prop;
                    }
                    res = res.concat(colors);
                }
            });
            return res;
        };

        /**
         * provides the list of forbidden positions given a color
         * @method getForbiddenPositions
         * @param {Color} color the color
         * @return {Array} the array of forbidden positions
         */
        this.getForbiddenPositions = function (color) {
            return currentWorkingSet[state][color] || currentWorkingSet[state]["*"];
        };

        /**
         * @method isSchemeBand4
         * @return {Boolean} wether the automaton is in band-4 state
         */
        this.isSchemeBand4 = function () {
            return state === STATE_BAND_4;
        };

        /**
         * @method isSchemeBand5
         * @return {Boolean} wether the automaton is in band-5 state
         */
        this.isSchemeBand5 = function () {
            return state === STATE_BAND_5;
        };
    };
});
