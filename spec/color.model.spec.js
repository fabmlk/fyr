//// duplicating color module is just a way of making it past jslint as we have to have an uppercase constructor when using 'new'
require(["color.model", "color.model"], function (color, Color) {
    "use strict";

    console.log("here here");

    describe("color", function () {
        var yellow;

        beforeEach(function () {
            yellow = color("yellow");
        });

        it("should throw an exception if color value not in range", function () {
            expect(function () {
                color("purple");
            }).toThrow();
        });
        it("should set color value", function () {
            expect(yellow.getValue()).toEqual("yellow");
        });
        it("should create individual colors", function () {
            var blue = color("blue");
            expect(blue.getValue()).toEqual("blue");
            expect(yellow.getValue()).toEqual("yellow");
        });
        it("should return the same instance on same colors", function () {
            var yellow2 = color("yellow"),
                yellow3 = new Color("yellow");
            expect(yellow2).toBe(yellow);
            expect(yellow3).toBe(yellow);
        });
    });
});
