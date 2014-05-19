/**
 * Helper to represent the view of the result to display from a calculated resistor
 * @module helper.resultview
 */
define(function () {
    "use strict";

    var ohmSymbol = "\u2126";

    function stringifyResistance(resistance) {
        var zeroes = String(resistance).split('0').length - 1,
            res;
        if (zeroes < 3) {
            res = String(resistance) + ' ';
        } else if (zeroes < 6) {
            res = String(resistance).slice(0, -3) + ' k';
        } else if (zeroes < 9) {
            res = String(resistance).slice(0, -6) + ' M';
        } else {
            res = String(resistance).slice(0, -9) + ' G';
        }
        return res + ohmSymbol;
    }

    function stringifyTolerance(tolerance) {
        return tolerance ? '\u00B1' + tolerance + '%' : ""; // +/- symbol
    }

    function stringifyTemperature(temperature) {
        return temperature ? temperature + " ppm/°C" : "";
    }

    /**
     * @class ResultView
     * @constructor
     * @param {jQuery Object} $this the jquery object of the result
     * @param {jQuery Object} $btnFind the jquery object of the button "Find"
     */
    return function ($this, $btnFind) {

        /**
         * Display the formated result and enable 'find' button
         * @method show
         * @param {Integer} resistance the calculated resistance
         * @param {Integer} tolerance the calculated tolerance
         * @param {Integer} [temperature] the calculated temperature
         */
        this.show = function (resistance, tolerance, temperature) {
            var html = "";
            html += stringifyResistance(resistance);
            html += " " + stringifyTolerance(tolerance);
            html += temperature ? ",<span class='nowrap'> " + stringifyTemperature(temperature) + "</span>" : ""; // other option for non-breaking text: html hyphen &#8209;
            $this.html(html);
            $btnFind.button("enable");
        };

        /**
         * Display result to 0 ohm and disable 'find' button
         * @method hide
         */
        this.hide = function () {
            $this.html("0 " + ohmSymbol);
            $btnFind.button("disable");
        };
    };
});
