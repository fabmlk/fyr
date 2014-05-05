require(["resistor.model", "color.model", "resistor.controller"], function (Resistor, color, controller) {
    "use strict";

    describe("resistor", function () {
        var resistor,
            setBandColors = function () {
                var i;
                for (i = 0; i < arguments.length; i += 1) {
                    resistor.setBandColor(arguments[i], i + 1);
                }
            },
            yellow = color("yellow"),
            black = color("black"),
            red = color("red"),
            silver = color("silver"),
            green = color("green"),
            violet = color("violet"),
            orange = color("orange"),
            gold = color("gold"),
            white = color("white"),
            blue = color("blue"),
            grey = color("grey");

        beforeEach(function () {
            resistor = new Resistor();
        });
        afterEach(function () {
            resistor.clear();
        });

        it("should accept valid color", function () {
            expect(function () {
                resistor.setBandColor(yellow, 1);
            }).not.toThrow();
        });
        it("should deny invalid color", function () {
            expect(function () {
                resistor.setBandColor(color("gooey"), 1);
            }).toThrow();
        });
        it("should keep its added colors", function () {
            resistor.setBandColor(yellow, 1);
            resistor.setBandColor(black, 2);
            expect(resistor.getBandColor(1)).toBe(yellow);
            expect(resistor.getBandColor(2)).toBe(black);
        });
        it("should replace existing in-place color", function () {
            resistor.setBandColor(yellow, 2);
            resistor.setBandColor(black, 2);
            expect(resistor.getBandColor(2)).toBe(black);
        });
        it("should unset existing in-place color", function () {
            resistor.setBandColor(yellow, 1);
            resistor.unsetBand(1);
            expect(resistor.getBandColor(1)).toBeUndefined();
        });
        it("should not throw exception when removing unexisting in-place color", function () {
            expect(function () {
                resistor.unsetBand(3);
            }).not.toThrow();
        });
        it("should refuse out of bound (>6) color schemes", function () {
            expect(function () {
                resistor.setBandColor(yellow, 7);
            }).toThrow();
        });
        it("should clear values", function () {
            resistor.setBandColor(blue, 1);
            resistor.setBandColor(green, 2);
            resistor.clear();
            expect(resistor.getBandColor(1)).toBeUndefined();
            expect(resistor.getBandColor(2)).toBeUndefined();
        });

        describe("logic scheme color detection", function () {
            describe("should refuse all-invalid color scheme position", function () {
                it("(silver, 1)", function () {
                    expect(function () {
                        resistor.setBandColor(silver, 1);
                    }).toThrow();
                });
                it("(silver, 2)", function () {
                    expect(function () {
                        resistor.setBandColor(silver, 2);
                    }).toThrow();
                });
                it("(black, 1)", function () {
                    expect(function () {
                        resistor.setBandColor(black, 1);
                    }).toThrow();
                });
                it("(black, 5)", function () {
                    expect(function () {
                        resistor.setBandColor(black, 5);
                    }).toThrow();
                });
                it("(black, 6)", function () {
                    expect(function () {
                        resistor.setBandColor(black, 6);
                    }).toThrow();
                });
                it("(white, 5)", function () {
                    expect(function () {
                        resistor.setBandColor(white, 5);
                    }).toThrow();
                });
                it("(white, 6)", function () {
                    expect(function () {
                        resistor.setBandColor(white, 6);
                    }).toThrow();
                });
                it("(green, 6)", function () {
                    expect(function () {
                        resistor.setBandColor(green, 6);
                    }).toThrow();
                });
                it("(grey, 6)", function () {
                    expect(function () {
                        resistor.setBandColor(grey, 6);
                    }).toThrow();
                });
                it("(silver, 6)", function () {
                    expect(function () {
                        resistor.setBandColor(silver, 6);
                    }).toThrow();
                });
                it("(gold, 6)", function () {
                    expect(function () {
                        resistor.setBandColor(gold, 6);
                    }).toThrow();
                });
                it("(gold, 1)", function () {
                    expect(function () {
                        resistor.setBandColor(gold, 1);
                    }).toThrow();
                });
                it("(gold, 2)", function () {
                    expect(function () {
                        resistor.setBandColor(gold, 2);
                    }).toThrow();
                });
            });

            describe("should refuse invalid color schemes based on current context", function () {
                it("(black, 4) + (gold, 3)", function () {
                    resistor.setBandColor(black, 4);
                    expect(function () {
                        resistor.setBandColor(gold, 3);
                    }).toThrow();
                });
                it("(black, 4) + (silver, 3)", function () {
                    resistor.setBandColor(black, 4);
                    expect(function () {
                        resistor.setBandColor(silver, 3);
                    }).toThrow();
                });
                it("(yellow, 5) + (silver, 3)", function () {
                    resistor.setBandColor(yellow, 5);
                    expect(function () {
                        resistor.setBandColor(silver, 3);
                    }).toThrow();
                });
                it("(white, 4) + (silver, 3)", function () {
                    resistor.setBandColor(white, 4);
                    expect(function () {
                        resistor.setBandColor(silver, 3);
                    }).toThrow();
                });
                it("(green, 3) + (blue, 2) + (silver, 3) + (blue, 5)", function () {
                    resistor.setBandColor(green, 3);
                    resistor.setBandColor(blue, 2);
                    resistor.setBandColor(silver, 3);
                    expect(function () {
                        resistor.setBandColor(blue, 5);
                    }).toThrow();
                });
                it("(gold, 3) + (blue, 5)", function () {
                    resistor.setBandColor(gold, 3);
                    expect(function () {
                        resistor.setBandColor(blue, 5);
                    }).toThrow();
                });
            });
        });

        describe("testing calculations", function () {

            it("yellow | black | red | red => resistance 2000, tolerance 2", function () {
                setBandColors(yellow, black, red, red);
                expect(resistor.getResistance()).toEqual(4000);
                expect(resistor.getTolerance()).toEqual(2);
            });
            it("white | blue | yellow | green => resistance 960000, tolerance 0.5", function () {
                setBandColors(white, blue, yellow, green);
                expect(resistor.getResistance()).toEqual(960000);
                expect(resistor.getTolerance()).toEqual(0.5);
            });
            it("white | blue | gold | violet => resistance 9.60, tolerance 0.1", function () {
                setBandColors(white, blue, gold, violet);
                expect(resistor.getResistance()).toEqual(9.60);
                expect(resistor.getTolerance()).toEqual(0.1);
            });
            it("yellow | blue | black | black | blue => resistance 460, tolerance 0.25", function () {
                setBandColors(yellow, blue, black, black, blue);
                expect(resistor.getResistance()).toEqual(460);
                expect(resistor.getTolerance()).toEqual(0.25);
            });
            it("yellow | green | orange | white | silver | violet => resistance 453000000000, tolerance 10, temperature 5", function () {
                setBandColors(yellow, green, orange, white, silver, violet);
                expect(resistor.getResistance()).toEqual(453000000000);
                expect(resistor.getTolerance()).toEqual(10);
                expect(resistor.getTemperature()).toEqual(5);
            });
        });

        describe("testing 'resistorcomplete' event", function () {
            it("should receive event on 4-band valid resistor", function () {
                var done = false, data;

                controller.$wrapped.on('resistorcomplete', function (e, d) {
                    data = d;
                    done = true;
                });
                setBandColors(white, blue, gold, violet);

                waitsFor(function () {
                    return done;
                }, "'resistorcomplete' has never been received within 5 seconds", 5000);

                runs(function () {
                    expect(data).not.toBeUndefined();
                    expect(data.tolerance).toEqual(0.1);
                    expect(data.resistance).toEqual(9.60);
                });
            });
        });
    });
});
