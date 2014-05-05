/**
* Defines a color for a resistor within its 11 authorized values range
* @module color.model
*/
define(["exception"], function (Exception) {
    "use strict";

    var colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white", "silver", "gold"],
        Color,
        colorSingletons,
        i;

    // We setup an array of singletons containing Color objects
    // Each singleton Color object contains the index to the corresponding color string in array colors
    // They all share the same getValue() property
    // When a color is asked, its singleton Color object is returned
    // This pattern with factory pattern makes sure no more than one identical color can exist in memory:
    //      Color("yellow") === Color("yellow") === new Color("yellow")
    Color = function (idx) {
        this.idx = idx;
    };

    /**
    * @method getValue
    * @return {String} color value in plain english
    */
    Color.prototype.getValue = function () {
        return colors[this.idx];
    };

    colorSingletons = [];

    for (i = 0; i < colors.length; i += 1) {
        colorSingletons[i] = new Color(i);
    }

    /**
     * Create a color object
     * @class Color
     * @constructor
     * @param {String} color a color in plain english
     */
    return function (color) {
        var idx = colors.indexOf(color);

        if (idx !== -1) {
            return colorSingletons[idx];
        }
        console.info("not found color " + color);
        throw new Exception("color: invalid color param: " + color);
    };
});
