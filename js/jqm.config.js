require(["jquery"], function ($) {
    "use strict";

    // hide page initially until all is find to go
    // we call initializePage() from app.js after everthing is loaded
    $(document).on("mobileinit", function () {
        $.mobile.autoInitializePage = false;
    });
});
