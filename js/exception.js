define(function () {
    "use strict";

    return function (message) {
        this.message = "fyr exception: " + message;
    };
});
