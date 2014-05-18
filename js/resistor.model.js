/**
 * Defines a resistor model
 * @module resistor.model
 */
define(["jquery", "pubsub", "exception", "helper.automaton", "helper.colorset"], function ($, PubSub, Exception, Automaton, ColorSet) {
    "use strict";

    var // ref: http://www.eeweb.com/toolbox/4-band-resistor-calculator/
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
            bands = [null, null, null, null, null, null], // setting elements to null is important here: we use that to detect "holes" on resistor completeness
            automaton = new Automaton(),

            /**
             * Fired when the resistor might be in a complete valid scheme
             * @event EVENT_COMPLETE
             * @broadcast
             */
            EVENT_COMPLETE = 'resistorcomplete', // fired when resistor is ready to perform calculation values

            // returns the float value of the resistor's resistance
            // it does not check if the resistor is complete, this should be done by the caller
            getResistance = function () {
                var digit1 = matchResistanceValue(bands[0]),
                    digit2 = matchResistanceValue(bands[1]),
                    digit3 = automaton.isSchemeBand5() ? matchResistanceValue(bands[2]) : "",
                    multiplier = automaton.isSchemeBand5() ? matchMultiplierValue(bands[3]) : matchMultiplierValue(bands[2]),
                    accuracy = 100; // round result to 2 decimal to avoid inaccuracies

                return Math.round(parseInt(String(digit1) + String(digit2) + String(digit3), 10) * multiplier * accuracy) / accuracy;
            },

            // returns the float value of the resistor's tolerance
            // no resistor complete check
            getTolerance = function () {
                console.log("bands getting tolerance vaut: " + JSON.stringify(bands));
                return automaton.isSchemeBand5() ? matchToleranceValue(bands[4]) : matchToleranceValue(bands[3]);
            },

            // returns the float value of the resistor's temperatur for 6-band
            // no resistor complete check
            getTemperature = function () {
                return matchTemperatureValue(bands[5]);
            },

            isResistorComplete = function () {
                var indexOfnull = bands.indexOf(null);
                return (indexOfnull === -1 || indexOfnull > 3) && // range 1-4 set consecutively
                    (!automaton.isSchemeBand5() || bands[4]);  // scheme band-4 or any => complete OR range 1-5 set => scheme band-5 => complete
            },

            publishCompleteEvent = function () {
                PubSub.publish(EVENT_COMPLETE, {
                    tolerance: getTolerance(),
                    resistance: getResistance(),
                    temperature: bands[5] && getTemperature()
                });
            },

            // it uses the automaton and inserts the color at position given if the automaton reported no forbidden state
            // on add, it detects if the resistor scheme might be complete to fire a EVENT_COMPLETE  event to the controller
            feedAutomaton = function (color, position) {
                if (position < 1 || position > bands.length) {
                    throw new Exception("resistor: band position is expected to be between 1 and 6 included: provided " + position);
                }
                // fail silently if no color is given
                if (color) {
                    if (automaton.acceptor(color, position) === false) {
                        throw new Exception("resistor: automaton reported a forbidden state for color " + color + " in position " + position + " with current bands = " + JSON.stringify(bands));
                    }
                    bands[position - 1] = color;

                    if (isResistorComplete()) {
                        publishCompleteEvent();
                    }
                }
            };

        this.EVENT_COMPLETE = EVENT_COMPLETE;

        /**
         * Best not call this method directly, use the EVENT_COMPLETE event instead
         * @method getTolerance
         * @return {Float} the tolerance value of the resistor
         */
        this.getTolerance = getTolerance;

        /**
         * Best not call this method directly, use the EVENT_COMPLETE event instead
         * @method getResistance
         * @return {Float} the resistance value of the resistor
         */
        this.getResistance = getResistance;

        /**
         * Best not call this method directly, use the EVENT_COMPLETE event instead
         * @method getTemperature
         * @return {Float} the temperature value for a 6-band resistor
         */
        this.getTemperature = getTemperature;

        /**
         * Sets color at given position
         * @method setBandColor
         * @param {Color} color the color to set
         * @param {Number} position the position
         */
        this.setBandColor = function (color, position) {
            feedAutomaton(color, position);
        };

        /**
         * @method getBandColor
         * @param {Number} position the position containing the color
         * @return {Color} the color currently set at given position
         */
        this.getBandColor = function (position) {
            return bands[position - 1];
        };

        /**
         * @method getBands
         * @return {Array} an array of currently set colors with zero-based positions
         */
        this.getBands = function () {
            return bands;
        };

        /**
         * @method unsetBand
         * @param {Number} position the position containing the color to unset
         */
        this.unsetBand = function (position) {
            if (position < 1) {
                throw new Exception("resistor: band position is expected to be between 1 and 6 included: provided " + position);
            }
            var color = bands[position - 1];
            if (color) {
                automaton.backtrack(color, position);
                bands[position - 1] = null;
                if (isResistorComplete()) {
                    publishCompleteEvent();
                }
            }
        };

        /**
         * Clear all resistor colors
         * @method clear
         */
        this.clear = function () {
            automaton.reset();
            bands = [null, null, null, null, null, null];
        };

        /**
         * Get an array of forbidden colors given a position
         * @method getForbiddenColors
         * @param {Number} position the position where we want to add a color
         * @return {Array} an array containing all forbidden colors given the position
         */
        this.getForbiddenColors = function (position) {
            return automaton.getForbiddenColors(position);
        };

        /**
         * get an array of forbidden positions given a color
         * @method getForbiddenPositions
         * @param {Color} color the color we want to add
         * @return {Array} an array containing all forbidden positions given the color
         */
        this.getForbiddenPositions = function (color) {
            return automaton.getForbiddenPositions(color);
        };

        // if arguments provided, set given colors
        $.each(args, function (i, color) {
            feedAutomaton(color, i + 1);
        });
    };
});
