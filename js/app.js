define(["jquery", "resistor.model", "resistor.controller", "resistor.view"], function ($, Resistor, Controller, view) {
    "use strict";

    return {
        initialize: function () {
            var resistor = new Resistor(),
                controller = new Controller(resistor);

            view(controller);

            // ready to go, show page!
            $("#apploading").css("display", "none");
            $.mobile.initializePage();
        }
    };
});
