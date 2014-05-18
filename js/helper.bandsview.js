/**
 * Helper for managing the html view of the bands in the resistor.view
 * On top of improved code readability in the resistor.view, this level of abstraction permits to adjust the html code of the bands
 * wihtout modifying its internal logic, i.e, as long as the bandsview is constructed with its bands set at the correct index in the page,
 * we might decide to add or remove wrappers around them without modifying neither the resistor.view code, nor this helper
 * @module helper.bandsview
 */
define(["jquery", "draggabilly", "pubsub"], function ($, Draggabilly, PubSub) {
    "use strict";

    var EVENT_UNSET_BAND = 'unsetband', // triggered when a band is unset, made accessible in BandsView
        /**
         * This class represents the view of a band. It is intended to be instanciated only via class Bandsview
         * @class BandView
         * @constructor
         * @param {jQuery Object} $this the jquery object of the band
         * @param {Integer} index the index of the band in the resistor, ranging from 1 to 6
         */
        BandView = function ($this, index) {
            // each band contains its own reference to a Draggabilly object
            var draggabilly = new Draggabilly($this[0], {
                    axis: 'y' // only drag along y axis
                });

            draggabilly.disable(); // init disabled

            /**
             * Set a color to the band
             * @method set
             * @param {jQuery Object} $color the jquery object of a color
             */
            this.set = function ($color) {
                $this.css("background-color", $color.css("background-color"));
            };

            /**
             * Unset a color from the band and triggers EVENT_UNSET_BAND event
             * @method unset
             */
            this.unset = function () {
                $this.css("background", "");
                PubSub.publish(EVENT_UNSET_BAND, this);
            };

            /**
             * Gives focus to a band
             * @method focus
             */
            this.focus = function () {
                $this.addClass("selected");
            };

            /**
             * Remove focus from a band
             * @method blur
             */
            this.blur = function () {
                $this.removeClass("selected");
            };

            /**
             * @method hasFocus
             * @return {Boolean} wether the band has currently the focus
             */
            this.hasFocus = function () {
                return $this.hasClass("selected");
            };

            /**
             * @method getDraggabilly
             * @return {Object} the draggabilly instance of the band
             */
            this.getDraggabilly = function () {
                return draggabilly;
            };

            /**
             * @method index
             * @return {Integer} the index of the band
             */
            this.index = function () {
                return index;
            };

            /**
             * Instance to its jQuery band object
             * @property $it
             * @type jQuery Object
             */
            this.$it = $this;
        };


    /**
     * Defines a BandsView: this is the view of the collection of bands in the page
     * @class BandsView
     * @constructor
     * @param {jQuery Object} $bands the jQuery collection of the bands
     */
    return function ($bands) {
        var bands = [];

        $bands.each(function () {
            var band = new BandView($(this), bands.length + 1);
            bands.push(band);
        });

        /**
         * Event triggered when a band has been unset
         * @event EVENT_UNSET_BAND
         * @broadcast
         */
        this.EVENT_UNSET_BAND = EVENT_UNSET_BAND;

        /**
         * @method getBand
         * @param {Integer|jQuery Object} indexOr$el the index of the band or its jquery object
         * @return {BandView} a BandView of the band
         */
        this.getBand = function (indexOr$el) {
            if (typeof indexOr$el === "number") {
                return bands[indexOr$el];
            }
            // Array.prototype.find() is ES6 !! Do not use it yet
            return bands.filter(function (band) {
                return band.$it.is(indexOr$el);
            })[0];
        };

        /**
         * @method arrayView
         * @return {Array} an array of all the BandViews
         */
        this.arrayView = function () {
            return bands;
        };

        /**
         * @method getFocused
         * @return {BandView} the BandView having currently the focus
         */
        this.getFocused = function () {
            var focusedBand;
            // Array.prototype.find is ES6: DO NOT USE IT YET
            $.each(bands, function (i) {
                if (bands[i].hasFocus()) {
                    focusedBand = bands[i];
                    return false; // break jquery loop
                }
            });
            return focusedBand;
        };

        /**
         * @method getNext
         * @param {BandView} band the BandView from which we want its next brother
         * @return {BandView} the next BandView or itself if no next brother
         */
        this.getNext = function (band) {
            var itIndex = bands.indexOf(band);
            return itIndex < bands.length - 1 ? bands[itIndex + 1] : band;
        };
    };
});
