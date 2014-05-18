require(["pubsub", "resistor.controller", "resistor.model", "helper.colorset"], function (PubSub, Controller, Resistor, ColorSet) {
    "use strict";

    describe("resistor controller", function () {
        var controller, resistor,
            blue = ColorSet.BLUE,
            green = ColorSet.GREEN,
            red = ColorSet.RED,
            yellow = ColorSet.YELLOW,
            black = ColorSet.BLACK,
            white = ColorSet.WHITE,
            orange = ColorSet.ORANGE,
            brown = ColorSet.BROWN,
            violet = ColorSet.VIOLET,
            gold = ColorSet.GOLD,
            silver = ColorSet.SILVER,
            grey = ColorSet.GREY;


        beforeEach(function () {
            resistor = new Resistor();
            controller = new Controller(resistor);

            this.addMatchers(customMatchers);
        });
        afterEach(function () {
            resistor.clear();
        });

        describe("controller.viewUpdateBands() testing", function () {
            beforeEach(function () {
                spyOn(controller, "viewUpdateBands");
            });

            it("should be called with correct position choices on selected color from initially empty resistor", function () {
                controller.selectColor(yellow);
                expect(controller.viewUpdateBands.mostRecentCall.args[0]).toEqual([]);
                controller.selectColor(black);
                expect(controller.viewUpdateBands.mostRecentCall.args[0]).toContainExactly(1, 5, 6);
                controller.selectColor(gold);
                expect(controller.viewUpdateBands.mostRecentCall.args[0]).toContainExactly(1, 2, 6);
                controller.selectColor(silver);
                expect(controller.viewUpdateBands.mostRecentCall.args[0]).toContainExactly(1, 2, 6);
                controller.selectColor(white);
                expect(controller.viewUpdateBands.mostRecentCall.args[0]).toContainExactly(5, 6);
            });

            it("should call controller.viewUpdateBands() with correct position choices on selected color from specific resistor scheme", function () {
                controller.setBandColor(black, 4);
                controller.selectColor(white);
                expect(controller.viewUpdateBands.mostRecentCall.args[0]).toContainExactly(5, 6);
                resistor.clear();

                controller.setBandColor(gold, 3);
                controller.selectColor(black);
                expect(controller.viewUpdateBands.mostRecentCall.args[0]).toContainExactly(1, 4, 5, 6);
                controller.selectColor(red);
                expect(controller.viewUpdateBands.mostRecentCall.args[0]).toContainExactly(5, 6);
                controller.selectColor(gold);
                expect(controller.viewUpdateBands.mostRecentCall.args[0]).toContainExactly(1, 2, 5, 6);
            });

        });

        describe("controller.viewUpdatePalette() testing", function () {
            beforeEach(function () {
                spyOn(controller, "viewUpdatePalette");
            });
            it("should call it with correct color choices based on any selected position from empty resistor", function () {
                controller.selectPosition(1);
                expect(controller.viewUpdatePalette.mostRecentCall.args[0]).toContainExactly(black, gold, silver);

                controller.selectPosition(5);
                expect(controller.viewUpdatePalette.mostRecentCall.args[0]).toContainExactly(white, black);

                controller.selectPosition(6);
                expect(controller.viewUpdatePalette.mostRecentCall.args[0]).toContainExactly(black, green, grey, white, gold, silver);
            });

            it("should call it with correct color choices based on selected position from specific resistor scheme", function () {
                controller.setBandColor(black, 4);
                controller.selectPosition(3);
                expect(controller.viewUpdatePalette.mostRecentCall.args[0]).toContainExactly(gold, silver);
                resistor.clear();

                controller.setBandColor(silver, 3);
                controller.selectPosition(5);
                expect(controller.viewUpdatePalette.mostRecentCall.args[0]).toContainExactly(black, brown, red, orange, yellow, green, blue, violet, grey, white, gold, silver);
                controller.selectPosition(6);
                expect(controller.viewUpdatePalette.mostRecentCall.args[0]).toContainExactly(black, brown, red, orange, yellow, green, blue, violet, grey, white, gold, silver);
            });
            describe("after unsetting bands: red | red | red | red | red", function () {
                it("unsetting band 5 re-allows gold, silver for band 3", function () {
                    controller.setBandColor(red, 1);
                    controller.setBandColor(red, 2);
                    controller.setBandColor(red, 3);
                    controller.setBandColor(red, 4);
                    controller.setBandColor(red, 5);
                    controller.selectPosition(3);
                    expect(controller.viewUpdatePalette.mostRecentCall.args[0]).toContainExactly(gold, silver);

                    controller.unsetBand(5);
                    controller.selectPosition(3);
                    expect(controller.viewUpdatePalette.mostRecentCall.args[0]).toContainExactly();
                });
            });
        });

        describe("error handling testing", function () {
            it("should call controller.viewOnError() on thrown exception", function () {
                spyOn(controller, "viewOnError");
                controller.setBandColor(black, 1);
                expect(controller.viewOnError).toHaveBeenCalled();
            });

            it("should clear resistor state on error", function () {
                spyOn(resistor, "clear").andCallThrough();
                controller.setBandColor(white, 5);
                expect(resistor.clear).toHaveBeenCalled();
                expect(resistor.getBandColor(2)).toBeNull();
            });

        });

        describe("controller.viewOnComplete() and .viewOnIncomplete()  testing", function () {
            /* make app-wide PubSub synchronous for better testing: otherwise race-condition can happen with other specs running */
            var publish = PubSub.publish;
            beforeEach(function () {
                PubSub.publish = PubSub.publishSync;
            });
            afterEach(function () {
                PubSub.publish = publish;
            });
            it("should receive EVENT_COMPLETE event and call viewOnComplete() with correct values when resistor is in a valid complete scheme", function () {
                spyOn(controller, "viewOnComplete");

                controller.setBandColor(black, 2);
                controller.setBandColor(yellow, 3);
                controller.setBandColor(white, 1);
                controller.setBandColor(grey, 4);

                expect(controller.viewOnComplete).toHaveBeenCalledWith(900000, 0.05, undefined);
            });
        });
    });
});
