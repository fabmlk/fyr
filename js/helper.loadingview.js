/**
 * Defines a view for a loading widget
 * @module helper.loadingView
 */
define(function () {
    "use strict";

    //Trick: as a deferred can be resolved only once, if it was previously resolved and the user wishes to navigate back and forth
    //between pages without recalculating a new resistor value (aka getting a new deferred),
    // we return a "fake" promise with a done() and state() method so it can pass the tests in the on() method
    var fakeResolvedPromise = {
        done: function (fn) {
            fn();
        },
        state: function () {
            return "resolved";
        }
    };

    /**
     * @class LoadingView
     * @constructor
     * @param {jQuery Object} $el the element to which we bind the loader
     */
    return function () {
        /**
         * When passing a promise, the loading widget will show until the promise has been resolved.
         * @method on
         * @param {Promise} [promise] the promise object
         * @return {Promise|undefined} the promise object if passed as param, else nothing
         */
        this.on = function (promise) {
            if (promise) {
                var self = this;
                promise.done(function () {
                    self.off();
                    promise = fakeResolvedPromise;
                });
            }
            if (!promise || (promise.state() !== "resolved" && promise.state() !== "rejected")) {
                $.mobile.loading("show", {
                    theme: 'b'
                });
            }
            return promise || null;
        };

        /**
         * Hide the loading widget
         * @method off
         */
        this.off = function () {
            $.mobile.loading("hide");
        };
    };
});
