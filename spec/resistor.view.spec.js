//to avoid strange race-conditions with other specs, run this spec in isolation with:
require(["pubsub", "resistor.view", "resistor.controller", "resistor.model", "text!../spec/fixtures/app.html"], function (PubSub, view, Controller, Resistor, html) {
    "use strict";

    describe("testing the view", function () {
        var resistor, controller, jqmDataColor = function (colorStr) {
            return $(".color:jqmData(color='" + colorStr + "')");
        },
            selectBand = function (n) {
                return $(".wrapper-band:eq(" + (n - 1) + ")").children(".band").first();
            };

        beforeEach(function () {
            resistor = new Resistor();
            controller = new Controller(resistor);
            setFixtures(html); // load jasmine-jquery fixture: must be set before loading the view!!!
            view(controller);
        });

        it("should have the correct html structure", function () {
            expect($("#palette")).toBeInDOM();
            expect($(".color")).toHaveLength(12);

            expect($("#resistor")).toExist();
            expect($(".band")).toHaveLength(6);

            expect($("#btnCalc")).toExist();
        });

        describe("bands-palette interaction", function () {
            it("first band should be the only one selected on start-up", function () {
                expect(selectBand(1)).toHaveClass("selected");
                $.each($(".wrapper-band:gt(0)"), function (i, wband) {
                    expect(wband.children(".band")).not.toHaveClass("selected");
                });
            });
            it("palette should show correct all colors except black, gold, silver on start-up with first band selected", function () {
                expect($(".disabled")).toHaveLength(3);
                expect(jqmDataColor('black')).toHaveClass("disabled");
                expect(jqmDataColor('gold')).toHaveClass("disabled");
                expect(jqmDataColor('silver')).toHaveClass("disabled");
            });

            describe("testing both band and color clicks resolving", function () {
                it("should set bands with class 'set' when both a band and a color have been selected", function () {
                    // initially, band 1 is selected
                    jqmDataColor('yellow').click();
                    expect($(".band").filter(".set")).toHaveLength(1);
                    expect(selectBand(1)).toHaveClass("set");

                    jqmDataColor('blue').click();
                    expect($(".band").filter(".set")).toHaveLength(2);
                    expect(selectBand(1)).toHaveClass("set");

                    jqmDataColor('white').click();
                    expect($(".band").filter(".set")).toHaveLength(3);
                    expect(selectBand(2)).toHaveClass("set");
                });
            });

            describe("testing next band automatic click selection", function () {
                it("setting band 1 should trigger click at band 2", function () {
                    jqmDataColor('yellow').click();
                    expect($('.selected')).toBe(selectBand(2));
                });
                it("setting band 2 should trigger click at band 3", function () {
                    selectBand(2).click();
                    jqmDataColor('yellow').click();
                    expect($('.selected')).toBe(selectBand(3));
                });
                it("setting band 4 should trigger click at band 5", function () {
                    selectBand(4).click();
                    jqmDataColor('yellow').click();
                    expect($('.selected')).toBe(selectBand(5));
                });
                it("setting band 6 should remain on band 6", function () {
                    selectBand(6).click();
                    jqmDataColor('yellow').click();
                    expect($('.selected')).toBe(selectBand(6));
                });
                it("setting band 3, 4, 1  should trigger next click at band 2", function () {
                    selectBand(3).click();
                    jqmDataColor('yellow').click();
                    jqmDataColor('blue').click();
                    selectBand(1).click();
                    jqmDataColor('yellow').click();
                    expect($('.selected')).toBe(selectBand(2));
                });
                xit("setting band 2, 3, 1 should trigger next click at band 4", function () {
                    selectBand(2).click();
                    jqmDataColor('yellow').click();
                    jqmDataColor('violet').click();
                    selectBand(1).click();
                    jqmDataColor('orange').click();
                    expect($('.selected')).toBe(selectBand(4));
                });
            });

            describe("testing palette update on band click", function () {
                it("clicking 4th band should disable no colors in the palette", function () {
                    selectBand(4).click();
                    expect($(".disabled")).not.toExist();
                });
                it("clicking 2nd band should disable colors gold and silver only", function () {
                    selectBand(2).click();
                    expect($(".disabled")).toHaveLength(2);
                    expect(jqmDataColor('gold')).toHaveClass("disabled");
                    expect(jqmDataColor('silver')).toHaveClass("disabled");
                });
                it("clicking 6th band should disable colors black, green, grey, white, gold, silver", function () {
                    selectBand(6).click();
                    expect($(".disabled")).toHaveLength(6);
                    expect(jqmDataColor('black')).toHaveClass("disabled");
                    expect(jqmDataColor('green')).toHaveClass("disabled");
                    expect(jqmDataColor('grey')).toHaveClass("disabled");
                    expect(jqmDataColor('white')).toHaveClass("disabled");
                    expect(jqmDataColor('gold')).toHaveClass("disabled");
                    expect(jqmDataColor('silver')).toHaveClass("disabled");
                });
                it("clicking band 4 on 4-band resistor scheme should disable colors black & white", function () {
                    selectBand(3).click(); // select band 3
                    jqmDataColor('gold').click(); // set color gold on it
                    expect($(".selected")).toBe(selectBand(4));

                    // here we are in a 4-band scheme, the selected band has been set automatically to band 4 and clicked
                    expect($(".disabled")).toHaveLength(2);
                    expect(jqmDataColor('black')).toHaveClass("disabled");
                    expect(jqmDataColor('white')).toHaveClass("disabled");
                });
                it("clicking band 3 on a 5-band resistor scheme should disable colors gold & silver", function () {
                    selectBand(5).click();
                    jqmDataColor('red').click();
                    selectBand(3).click();
                    expect($(".disabled")).toHaveLength(2);
                    expect(jqmDataColor('gold')).toHaveClass("disabled");
                    expect(jqmDataColor('silver')).toHaveClass("disabled");
                });
            });

            describe("testing EVENT_COMPLETE", function () {
                var publish = PubSub.publish;
                beforeEach(function () {
                    PubSub.publish = PubSub.publishSync;
                });
                afterEach(function () {
                    PubSub.publish = publish;
                });
                it("should disable button to calculate on start", function () {
                    expect($("#btnCalc").button("option", "disabled")).toEqual(true);
                });
                it("should enable the button calc on completeness", function () {
                    expect($("#btnCalc").button("option", "disabled")).toEqual(true);
                    jqmDataColor('brown').click(); // brown | | |
                    expect($("#btnCalc").button("option", "disabled")).toEqual(true);
                    selectBand(3).click();
                    jqmDataColor('yellow').click(); // brown | | yellow |
                    expect($("#btnCalc").button("option", "disabled")).toEqual(true);
                    jqmDataColor('red').click(); // brown | | yellow | red
                    expect($("#btnCalc").button("option", "disabled")).toEqual(true);
                    selectBand(2).click();
                    jqmDataColor('blue').click(); // brown | blue | yellow | red
                    expect($("#btnCalc").button("option", "disabled")).toEqual(false);
                });
                it("should disable button calc if completeness is followed by incompleteness and vice-versa", function () {
                    jqmDataColor('brown').click();
                    jqmDataColor('yellow').click();
                    jqmDataColor('black').click();
                    jqmDataColor('violet').click();
                    expect($("#btnCalc").button("option", "disabled")).toEqual(false);
                    selectBand(1).click();
                    jqmDataColor('white').click();
                    expect($("#btnCalc").button("option", "disabled")).toEqual(false);
                    selectBand(6).click();
                    jqmDataColor('violet').click();
                    expect($("#btnCalc").button("option", "disabled")).toEqual(true);
                    selectBand(5).click();
                    jqmDataColor('violet').click();
                    expect($("#btnCalc").button("option", "disabled")).toEqual(false);
                });
            });
        });
    });
});
