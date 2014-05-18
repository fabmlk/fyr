define(["jquery", "pubsub", "helper.colorset", "helper.bandsview", "helper.resultview", "helper.loadingview", "octopart", "helper.draggable", "jquery-mobile"], function ($, PubSub, ColorSet, BandsView, ResultView, LoadingView, Octopart, Draggable) {
    "use strict";

    var colors = {
        black: ColorSet.BLACK,
        brown: ColorSet.BROWN,
        red: ColorSet.RED,
        orange: ColorSet.ORANGE,
        yellow: ColorSet.YELLOW,
        green: ColorSet.GREEN,
        blue: ColorSet.BLUE,
        violet: ColorSet.VIOLET,
        grey: ColorSet.GREY,
        white: ColorSet.WHITE,
        gold: ColorSet.GOLD,
        silver: ColorSet.SILVER
    };

    return function (controller) {
        var $colors = $("#palette").children(".color"),
            $bands = $("#resistor").find(".band"),
            $btnFind = $("#btnFind"),
            $datapage = $("#datapage"),
            resultView = new ResultView($("#result"), $btnFind),
            bandsView = new BandsView($bands, resultView, controller),
            loadingView = new LoadingView($btnFind),
            octopart = new Octopart($datapage, $("#detailspage")),
            octopartPromise; // promise binding the octopart request

        /** init controller **/
        controller.viewOnError = function (msg) {
            alert("Une erreure est survenue avec le message suivant:\n" + msg);
        };

        // called when a band color is set
        // disable all colors that are forbidden given the current resistor state and band selected
        controller.viewUpdatePalette = function (forbiddenColors) {
            $colors.removeClass("disabled");
            $.each(Object.keys(colors).filter(function (key) {
                return forbiddenColors.indexOf(key) !== -1;
            }), function (i, key) {
                $(".color:jqmData(color='" + key + "')").addClass("disabled");
            });
        };

        // called when resistor is possibly complete
        controller.viewOnComplete = function (resistance, tolerance, temperature) {
            resultView.show(resistance, tolerance, temperature);
            // this app is based on finding resistor for basic circuits as fancy electronics don't use color codes (too small!)
            octopartPromise = octopart.fetch({
                resistance: resistance,
                tolerance: tolerance,
                temperature: temperature,
                filter: {
                    throughole: controller.getNumberOfBandsSet() === 4, // through-hole types seem to be only available for 4-band scheme resistor
                    distributor: "Digi-Key", // no need to query other distributors, this one has all its need plus it gave me the inspiration for this app!
                    terminations: 2 // basic component
                }
            }).then(null, function () { // arg #2 = fail callback: no network available
                // then() memo: "give me a callback for this promise, and I'll give you a promise that represents the result of that callback"
                //                  Carrie Mitchell - Async Javascript
                //
                // demo version: inform the user with a popup that a local sample is being used instead
                // octopart.js was coded as if it was an api. This callback is the only part of the code to change in the whole app
                // to switch from a demo version to a "normal" version which whould typically display an error message on $btnFind "click/tap"
                var $popup = $("#popupNoNetwork");
                $popup.popup({
                    positionTo: "window",
                    overlayTheme: 'b',
                    theme: 'b',
                    dismissible: false
                });
                $.mobile.pageContainer.one("pagecontainerbeforeshow", function () {
                    $popup.popup("open");
                });
                return octopart.fetchRaw("../assets/sampleoctopartdata.json.js"); // sample data wrapped in a requirejs define()
            }).done(function (data) {
                octopart.display(data); // don't wait on $btnFind "tap/click" here, build the $datapage DOM in advance!
            }).fail(function () { // should never occur!!
                alert("Démo non disponible: l'échantillon test local en cas d'erreur de connexion n'a pas pu être retrouvé.");
            });
        };

        /** init bands **/
        PubSub.subscribe(bandsView.EVENT_UNSET_BAND, function (msg, band) {
            Draggable.unwrap(band);
            resultView.hide();
            controller.unsetBand(band.index());
        });

        $bands.on("tap", function () {
            var band = bandsView.getBand($(this));
            $.each(bandsView.arrayView(), function (i, band) {
                band.blur();
            });
            band.focus();
            controller.selectPosition(band.index());
        });
        bandsView.getBand(0).$it.tap(); // init click on first band

        /** init colors **/
        $colors.on("tap", function () {
            var band;
            if (!$(this).hasClass("disabled")) {
                band = bandsView.getFocused();
                band.set($(this));
                Draggable.wrap(band);
                bandsView.getNext(band).$it.tap();
                controller.setBandColor(colors[$(this).data("color")], band.index());
            }
        });

        /** init Find button **/
        $btnFind.on("tap", function () {
            // do the page transition only if data are ready, otherwise, show a loading widget
            loadingView.on(octopartPromise).done(function () {
                // other hardly documented syntax possible to access pagecontainer element:
                // http://stackoverflow.com/questions/19174611/how-to-change-page-in-latest-jquery-mobile-1-4-beta
                // see also nice jqm events reference: http://jqmtricks.wordpress.com/2014/03/26/jquery-mobile-page-events/
                $.mobile.pageContainer.pagecontainer("change", $datapage);
            });
        });
    };
});
