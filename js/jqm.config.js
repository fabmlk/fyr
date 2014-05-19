require(["jquery"], function ($) {
    "use strict";

    $(document).on("mobileinit", function () {
        // hide page initially until all is find to go
        // we call initializePage() from app.js after everthing is loaded
        $.mobile.autoInitializePage = false;
        $.mobile.defaultPageTransition = "slide";
    });
});
