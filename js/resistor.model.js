/**
 * Defines a resistor model
 * @module resistor.model
 */
define(["jquery", "pubsub", "exception", "resistor.model.helper.automaton", "helper.colorset"], function ($, PubSub, Exception, Automaton, ColorSet) {
    "use strict";

    var MAX_BAND = 6, // constant: 6 bands seem the limit a resistor can have

        /**$
         * Fired when the resistor might be in a complete valid scheme
         * @event resistorcomplete
         * @broadcast
         */
        EVENT_COMPLETE = 'resistorcomplete', // fired when resistor is ready to perform calculation values

        // ref: http://www.eeweb.com/toolbox/4-band-resistor-calculator/
        matchResistanceValue = function (color) {
            switch (color) {
            case ColorSet.BLACK:
                return 0;
            case ColorSet.BROWN:
                return 1;
            case ColorSet.RED:
                return 2;
            case ColorSet.ORANGE:
                return 3;
            case ColorSet.YELLOW:
                return 4;
            case ColorSet.GREEN:
                return 5;
            case ColorSet.BLUE:
                return 6;
            case ColorSet.VIOLET:
                return 7;
            case ColorSet.GREY:
                return 8;
            case ColorSet.WHITE:
                return 9;
            }
        },

        matchMultiplierValue = function (color) {
            switch (color) {
            case ColorSet.BLACK:
                return 1;
            case ColorSet.BROWN:
                return 10;
            case ColorSet.RED:
                return 100;
            case ColorSet.ORANGE:
                return 1000;
            case ColorSet.YELLOW:
                return 10000;
            case ColorSet.GREEN:
                return 100000;
            case ColorSet.BLUE:
                return 1000000;
            case ColorSet.VIOLET:
                return 10000000;
            case ColorSet.GREY:
                return 100000000;
            case ColorSet.WHITE:
                return 1000000000;
            case ColorSet.GOLD:
                return 0.1;
            case ColorSet.SILVER:
                return 0.01;
            }
        },

        matchToleranceValue = function (color) {
            switch (color) {
            case ColorSet.BROWN:
                return 1;
            case ColorSet.RED:
                return 2;
            case ColorSet.ORANGE:
                return 3;
            case ColorSet.YELLOW:
                return 4;
            case ColorSet.GREEN:
                return 0.5;
            case ColorSet.BLUE:
                return 0.25;
            case ColorSet.VIOLET:
                return 0.1;
            case ColorSet.GREY:
                return 0.05;
            case ColorSet.GOLD:
                return 5;
            case ColorSet.SILVER:
                return 10;
            }
        },

        matchTemperatureValue = function (color) {
            switch (color) {
            case ColorSet.BROWN:
                return 100;
            case ColorSet.RED:
                return 50;
            case ColorSet.ORANGE:
                return 15;
            case ColorSet.YELLOW:
                return 25;
            case ColorSet.BLUE:
                return 10;
            case ColorSet.VIOLET:
                return 5;
            }
        };

    /**
     * A resistor object
     * @class Resistor
     * @constructor
     * @param {Color} [colors]* colors to set with their positions matching the order in which they are passed as arguments
     */
    return function () {
        var args = [].slice.call(arguments),
            bands = [],
            automaton = new Automaton(),

            // returns the float value of the resistor's resistance
            // it does not check if the resistor is complete, this should be done by the caller
            getResistance = function () {
                var digit1 = matchResistanceValue(bands[0]),
                    digit2 = matchResistanceValue(bands[1]),
                    digit3 = automaton.isSchemeBand5() ? matchResistanceValue(bands[2]) : "",
                    multiplier = automaton.isSchemeBand5() ? matchMultiplierValue(bands[3]) : matchMultiplierValue(bands[2]),
                    precision = 100; // round result to 2 decimal to avoid precision errors


                return Math.round(parseInt(String(digit1) + String(digit2) + String(digit3), 10) * multiplier * precision) / precision;
            },

            // returns the float value of the resistor's tolerance
            // no resistor complete check
            getTolerance = function () {
                return automaton.isSchemeBand5() ? matchToleranceValue(bands[4]) : matchToleranceValue(bands[3]);
            },

            // returns the float value of the resistor's temperatur for 6-band
            // no resistor complete check
            getTemperature = function () {
                return matchTemperatureValue(bands[5]);
            },

            // is uses the automaton and inserts the color at position given if the automaton reported no forbidden state
            // on add, it detects if the resistor scheme might be complete to fire a 'resistorcomplete' event to the controller
            feedAutomaton = function (color, position) {
                var isSchemeComplete;

                if (position < 1 || position > MAX_BAND) {
                    throw new Exception("resistor: band position is expected to be between 1 and 6 included: provided " + position);
                }
                // fail silently if no color is given
                if (color) {
                    if (automaton.acceptor(color, position) === false) {
                        throw new Exception("resistor: automaton reported a forbidden state for color " + color + " in position " + position + " with current bands = " + JSON.stringify(bands));
                    }
                    bands[position - 1] = color;

                    // checks if the resistor might be complete by comparing the automaton's state with the bands array:
                    // if bands[] contains "holes" (undefined values) then it cannot be complete
                    // It permits to avoid using around an error-prone variable to keep the number of added colors
                    isSchemeComplete = function (scheme) {
                        // we cannot use Array.prototype.reduce() as it skips undefined elements in arrays
                        return bands.length === scheme && bands.filter(function (elt) {
                            return elt !== undefined;
                        }).length === bands.length;
                    };

                    if ((isSchemeComplete(4) && !automaton.isSchemeBand5()) || ((isSchemeComplete(5) || isSchemeComplete(6)) && automaton.isSchemeBand5())) {
                        // resistor might be complete: ready for calculations
                        PubSub.publish(EVENT_COMPLETE, {
                            tolerance: getTolerance(),
                            resistance: getResistance()
                        });
                    }
                }
            };

        /**
         * Best not call this method manually, use the 'resistorcomplete' event instead
         * @method getTolerance
         * @return {Float} the tolerance value of the resistor
         */
        this.getTolerance = getTolerance;

        /**
         * Best not call this method manually, use the 'resistorcomplete' event instead
         * @method getResistance
         * @return {Float} the resistance value of the resistor
         */
        this.getResistance = getResistance;

        /**
         * Best not call this method manually, use the 'resistorcomplete' event instead
         * @method getTemperature
         * @return {Float} the temperature value for a 6-band resistor
         */
        this.getTemperature = getTemperature;

        /**
         * Sets color at given position
         * @method setBandColor
         * @param {Color} color the color to set
         * @param {Integer} position the position
         */
        this.setBandColor = function (color, position) {
            feedAutomaton(color, position);
        };

        /**
         * @method getBandColor
         * @param {Integer} position the position containing the color
         * @return {Color} the color currently set at given position
         */
        this.getBandColor = function (position) {
            return bands[position - 1];
        };

        /**
         * @method unsetBand
         * @param {Integer} position the position containing the color to unset
         */
        this.unsetBand = function (position) {
            if (bands[position - 1]) {
                automaton.backtrack(position);
                bands[position - 1] = undefined;
            }
        };

        /**
         * Clear all resistor colors
         * @method clear
         */
        this.clear = function () {
            automaton.reset();
            bands = [];
        };

        // if arguments provided, set given colors
        $.each(args, function (i, color) {
            feedAutomaton(color, i + 1);
        });
    };
});
