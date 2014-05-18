/**
* Defines the color range helper for a resistor with its 12 authorized values
* @module helper.colorset
* @class ColorSet
*/
define(function () {
    "use strict";

    var colorSet = {
        /**
         * @property BLACK
         * @final
         */
        BLACK: "black",
        /**
         * @property BROWN
         * @final
         */
        BROWN: "brown",
        /**
         * @property RED
         * @final
         */
        RED: "red",
        /**
         * @property ORANGE
         * @final
         */
        ORANGE: "orange",
        /**
         * @property YELLOW
         * @final
         */
        YELLOW: "yellow",
        /**
         * @property GREEN
         * @final
         */
        GREEN: "green",
        /**
         * @property BLUE
         * @final
         */
        BLUE: "blue",
        /**
         * @property VIOLET
         * @final
         */
        VIOLET: "violet",
        /**
         * @property GREY
         * @final
         */
        GREY: "grey",
        /**
         * @property WHITE
         * @final
         */
        WHITE: "white",
        /**
         * @property BROWN
         * @final
         */
        SILVER: "silver",
        /**
         * @property GOLD
         * @final
         */
        GOLD: "gold",
        /**
         * @method all
         * @return {Array} an array of all possible colors
         */
        all: function () {
            return [this.WHITE, this.BLACK, this.GREY, this.YELLOW, this.GOLD, this.ORANGE, this.SILVER, this.VIOLET, this.RED, this.BLUE, this.GREEN, this.BROWN];
        }
    };

    /**
     * @return {ColorSet} colors helper
     */
    return colorSet;
});
