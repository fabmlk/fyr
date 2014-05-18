var customMatchers = (function () {
    "use strict";

    // helper to test if an array contains exactly all elements specified in any order
    return {
        toContainExactly: function () {
            var args = [].slice.call(arguments);

            function specContains(arr1, arr2) {
                return arr1.length === arr2.length && arr1.reduce(function (prev, curr) {
                    return prev && arr2.indexOf(curr) !== -1;
                }, true);
            }

            this.message = function () {
                return "Expected " + JSON.stringify(this.actual) + " to contain exactly " + JSON.stringify(args);
            };
            return specContains(this.actual, args);
        }
    };
}());
