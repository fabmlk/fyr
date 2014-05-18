/**
 * Controller for the resistor
 * @module resistor.controller
 */
define(["pubsub", "exception"], function (PubSub, Exception) {
    "use strict";

    /**
     * Defines the MVC controller for the app.
     * It acts as a complete proxy between the view and the model so that the view will never interact with the resistor model directly.
     * The controller is also decoupled from the view. It has no knowledge of it directly as it expects the view to provide the necessary callbacks functions.
     * It subscribes to the EVENT_COMPLETE event.
     * @class Controller
     * @constructor
     * @param {Resistor} resistor a resistor model
     */
    return function (resistor) {
        var that = this;

        if (!resistor) {
            throw new Exception("missing contructor param 'resistor' in controller");
        }

        PubSub.subscribe(resistor.EVENT_COMPLETE, function (msg, data) {
            that.viewOnComplete(data.resistance, data.tolerance, data.temperature);
        });

        function handleException(e, viewOnError) {
            viewOnError = viewOnError || that.viewOnError;
            if (viewOnError) {
                if (e instanceof Exception) {
                    viewOnError(e.name + ": " + e.message);
                } else {
                    viewOnError(e);
                }
            }
            resistor.clear();
        }

        /**
         * Method to call when the EVENT_COMPLETE is received from the resistor.
         * Should be redefined directly in the view. Keep it public for testing purposes.
         * @property viewOnComplete
         * @type Function
         * @param {Number} resistance resistance value
         * @param {Float} tolerance tolerance value
         * @param {Float} temperature temperature value
         * @default 'console.log()'
         */
        this.viewOnComplete = function (resistance, tolerance, temperature) {
            console.log("controller::EVENT_COMPLETE:\n\t* resistance=" + resistance + "\n\t* tolerance=" + tolerance + "\n\t* temperature=" + temperature);
        };

        /**
         * Method to call when a color is selected in the view
         * Should be redefined directly in the view. Keep it public for testing purposes.
         * @property viewUpdateBands
         * @type Function
         * @param {Array} forbiddenPositions array of forbidden positions
         * @default 'console.log()'
         */
        this.viewUpdateBands = function (arr) {
            console.log("controller::updateBands: " + JSON.stringify(arr));
        };

        /**
         * Method to call when a band position is selected in the view
         * Should be redefined directly in the view. Keep it public for testing purposes.
         * @property viewUpdatePalette
         * @type Function
         * @param {Array} forbiddenColors array of forbidden colors
         * @default 'console.log()'
         */
        this.viewUpdatePalette = function (arr) {
            console.log("controller::updatePalette: " + JSON.stringify(arr));
        };

        /**
         * Method to call when an error has occured
         * Should be redefined directly in the view. Keep it public for testing purposes.
         * @property viewOnError
         * @type Function
         * @param {String} message message of the raised exception
         * @default 'console.error()'
         */
        this.viewOnError = function (e) {
            console.error("controller::onError: " + JSON.stringify(e));
        };

        /**
         * Select a color.
         * @method selectColor
         * @param {Color} color the color object selected
         * @param {Function} [viewUpdateBands] the callback to receive an array of forbidden positions given the color. Overrides property 'viewUpdateBands'.
         * @param {Function} [viewOnError] the callback to call on error. Overrides property 'viewOnError'.
         */
        this.selectColor = function (color, viewUpdateBands, viewOnError) {
            viewUpdateBands = viewUpdateBands || this.viewUpdateBands;
            if (viewUpdateBands) {
                try {
                    viewUpdateBands(resistor.getForbiddenPositions(color));
                } catch (e) {
                    handleException(e, viewOnError);
                }
            }
        };

        /**
         * Select a position.
         * @method selectPosition
         * @param {Number} position the band position selected
         * @param {Function} [viewUpdatePalette] the callback to receive an array of forbidden colors given the position. Overrides property 'viewUpdatePalette'.
         * @param {Function} [viewOnError] the callback to call on error. Overrides property 'viewOnError'.
         */
        this.selectPosition = function (position, viewUpdatePalette, viewOnError) {
            viewUpdatePalette = viewUpdatePalette || this.viewUpdatePalette;
            if (viewUpdatePalette) {
                try {
                    viewUpdatePalette(resistor.getForbiddenColors(position));
                } catch (e) {
                    handleException(e, viewOnError);
                }
            }
        };

        /**
         * Set the color given to the resistor at band position.
         * @method setBandColor
         * @param {Color} color the color to add
         * @param {Number} position the band position to add the color at
         * @param {Function} [viewOnComplete] the callback to receive the results with the resistor values. Overrides property 'viewOnComplete'.
         * @param {Function} [viewOnError] the callback to call on error. Overrides property 'viewOnError'.
         */
        this.setBandColor = function (color, position, viewOnComplete, viewOnError) {
            this.viewOnComplete = this.viewOnComplete || viewOnComplete;
            try {
                resistor.setBandColor(color, position);
            } catch (e) {
                handleException(e, viewOnError);
            }
        };

        /**
         * Unset the color currently at band position
         * @method unsetBand
         * @param {Number} position the position of the band to unset
         * @param {Function} [viewOnComplete] the callback to receive the results with the results values. Overrides property 'viewOnComplete'.
         * @param {Function} [viewOnError] the callback to cal on error. Overrides property 'viewOnError'.
         */
        this.unsetBand = function (position, viewOnComplete, viewOnError) {
            this.viewOnComplete = this.viewOnComplete || viewOnComplete;
            try {
                resistor.unsetBand(position);
            } catch (e) {
                handleException(e, viewOnError);
            }
        };

        /**
         * Get the number of bands currently set
         * We can use it in a viewOnComplete to determine the type of band
         * @method getNumberOfBandsSet
         * @return {Number} the number of bands set
         */
        this.getNumberOfBandsSet = function () {
            return resistor.getBands().filter(function (elt) {
                return elt !== null;
            }).length;
        };
    };
});
