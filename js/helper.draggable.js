/**
 * Defines a draggable helper around the activation/deactivation of dragging a band
 * @module helper.draggable
 */
define(function () {
    "use strict";

    var draggable = function (band) {
        var draggabilly = band.getDraggabilly(),
            offsetY;

        // save offsetY on dragstart and when draggable is called as resizing the window after calling draggable changes all offsets!
        draggabilly.on("dragStart", function () {
            offsetY = band.$it.offset().top;
        });
        // animate move draggable
        draggabilly.on("dragMove", function (instance) {
            band.$it.css("opacity", (50 - Math.abs(instance.position.y)) / 100);
        });
        draggabilly.on("dragEnd", function () {
            if (band.$it.css("opacity") <= 0) { // band should be removed
                band.unset();
            }
            // in any case: reset opacity to normal and original offset
            band.$it.offset({top: offsetY});
            band.$it.css("opacity", 1);
        });

        return {
            on: function () {
                draggabilly.enable();
                band.$it.css("cursor", "pointer");
            },
            off: function () {
                draggabilly.disable();
                band.$it.css("cursor", "");
            }
        };
    };

    /**
     * Wrapper helper around the mecanism of dragging a band
     * @class Draggable
     * @static
     */
    return {
        /**
         * @method wrap
         * @param {Object} band the band to be activated dragging mecanisme
         */
        wrap: function (band) {
            draggable(band).on();
        },

        /**
         * @method unwrap
         * @param {Object} band the band to be deactivated dragging mecanism
         */
        unwrap: function (band) {
            draggable(band).off();
        }
    };
});
