require(["pubsub", "resistor.model", "helper.colorset"], function (PubSub, Resistor, ColorSet) {
    "use strict";

    describe("resistor", function () {
        var resistor,
            specSetBandColors = function () {
                var i;
                for (i = 0; i < arguments.length; i += 1) {
                    resistor.setBandColor(arguments[i], i + 1);
                }
            },
            yellow = ColorSet.YELLOW,
            black = ColorSet.BLACK,
            red = ColorSet.RED,
            silver = ColorSet.SILVER,
            green = ColorSet.GREEN,
            violet = ColorSet.VIOLET,
            orange = ColorSet.ORANGE,
            gold = ColorSet.GOLD,
            white = ColorSet.WHITE,
            blue = ColorSet.BLUE,
            grey = ColorSet.GREY,
            brown = ColorSet.BROWN;

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
        it("should not add invalid color", function () {
            resistor.setBandColor(ColorSet.GOOEY, 1);
            expect(resistor.getBandColor(1)).toBeNull();
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
            expect(resistor.getBandColor(1)).toBeNull();
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
            expect(resistor.getBandColor(1)).toBeNull();
            expect(resistor.getBandColor(2)).toBeNull();
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

        describe("forbidden colors & forbidden positions", function () {
            beforeEach(function () {
                this.addMatchers(customMatchers);
            });

            describe("forbidden positions when resistor might be complete", function () {
                describe("yellow | blue | blue | black", function () {
                    beforeEach(function () {
                        specSetBandColors(yellow, blue, blue, black);
                    });
                    it("white forbids 5, 6", function () {
                        expect(resistor.getForbiddenPositions(white)).toContainExactly(5, 6);
                    });
                    it("black forbids 1, 5, 6", function () {
                        expect(resistor.getForbiddenPositions(black)).toContainExactly(1, 5, 6);
                    });
                    it("gold forbids 1, 2, 3, 6", function () {
                        expect(resistor.getForbiddenPositions(gold)).toContainExactly(1, 2, 3, 6);
                    });
                });

                describe("blue | yellow | gold | blue", function () {
                    beforeEach(function () {
                        specSetBandColors(blue, yellow, gold, blue);
                    });
                    it("white forbids 4, 5, 6", function () {
                        expect(resistor.getForbiddenPositions(white)).toContainExactly(4, 5, 6);
                    });
                    it("black forbids 1, 4, 5, 6", function () {
                        expect(resistor.getForbiddenPositions(black)).toContainExactly(1, 4, 5, 6);
                    });
                });
            });

            describe("forbidden colors when resistor might be complete", function () {
                describe("yellow | blue | blue | black", function () {
                    beforeEach(function () {
                        specSetBandColors(yellow, blue, blue, black);
                    });
                    it("1 forbids black, gold, silver", function () {
                        expect(resistor.getForbiddenColors(1)).toContainExactly(black, gold, silver);
                    });
                    it("5 forbids black white", function () {
                        expect(resistor.getForbiddenColors(5)).toContainExactly(black, white);
                    });
                    it("6 forbids green, grey, white, gold, silver", function () {
                        expect(resistor.getForbiddenColors(6)).toContainExactly(black, green, grey, white, gold, silver);
                    });
                });
                describe("blue | yellow | gold | blue", function () {
                    beforeEach(function () {
                        specSetBandColors(blue, yellow, gold, blue);
                    });
                    it("1 forbids black, gold, silver", function () {
                        expect(resistor.getForbiddenColors(1)).toContainExactly(black, gold, silver);
                    });
                    it("5 forbids all colors", function () {
                        expect(resistor.getForbiddenColors(5)).toContainExactly(black, brown, red, orange, yellow, green, blue, violet, grey, white, gold, silver);
                    });
                });
            });

            describe("forbidden colors when bands are unset", function () {
                describe("red | yellow | gold | grey", function () {
                    beforeEach(function () {
                        specSetBandColors(red, yellow, gold, grey);
                    });
                    it("unsetting yellow forbids gold, silver in position 2", function () {
                        resistor.unsetBand(2);
                        expect(resistor.getForbiddenColors(2)).toContainExactly(gold, silver);
                    });
                    it("unsetting yellow in this 4-band scheme still forbids all colors in band 5", function () {
                        resistor.unsetBand(2);
                        expect(resistor.getForbiddenColors(5)).toContainExactly(black, brown, red, orange, yellow, green, blue, violet, grey, white, gold, silver);
                    });
                    it("unsetting gold re-allows colors to be inserted in band 5", function () {
                        resistor.unsetBand(3);
                        expect(resistor.getForbiddenColors(5)).toContainExactly(black, white);
                    });
                });
                describe("red | yellow | black | grey | blue", function () {
                    beforeEach(function () {
                        specSetBandColors(red, yellow, black, grey, blue);
                    });
                    it("unsetting red still forbids gold in position 3", function () {
                        resistor.unsetBand(1);
                        expect(resistor.getForbiddenColors(3)).toContainExactly(gold, silver);
                    });
                    it("unsetting blue re-allows gold to be inserted in band 3", function () {
                        resistor.unsetBand(5);
                        expect(resistor.getForbiddenColors(3)).toContainExactly();
                    });
                });
            });
        });

        describe("testing calculations", function () {

            it("yellow | black | red | red => resistance 2000, tolerance 2", function () {
                specSetBandColors(yellow, black, red, red);
                expect(resistor.getResistance()).toEqual(4000);
                expect(resistor.getTolerance()).toEqual(2);
            });
            it("white | blue | yellow | green => resistance 960000, tolerance 0.5", function () {
                specSetBandColors(white, blue, yellow, green);
                expect(resistor.getResistance()).toEqual(960000);
                expect(resistor.getTolerance()).toEqual(0.5);
            });
            it("white | blue | gold | violet => resistance 9.60, tolerance 0.1", function () {
                specSetBandColors(white, blue, gold, violet);
                expect(resistor.getResistance()).toEqual(9.60);
                expect(resistor.getTolerance()).toEqual(0.1);
            });
            it("yellow | blue | black | black | blue => resistance 460, tolerance 0.25", function () {
                specSetBandColors(yellow, blue, black, black, blue);
                expect(resistor.getResistance()).toEqual(460);
                expect(resistor.getTolerance()).toEqual(0.25);
            });
            it("yellow | green | orange | white | silver | violet => resistance 453000000000, tolerance 10, temperature 5", function () {
                specSetBandColors(yellow, green, orange, white, silver, violet);
                expect(resistor.getResistance()).toEqual(453000000000);
                expect(resistor.getTolerance()).toEqual(10);
                expect(resistor.getTemperature()).toEqual(5);
            });
        });

        describe("testing EVENT_COMPLETE event", function () {
            /* make app-wide PubSub synchronous for better testing: otherwise race-condition can happen with other specs running */
            var publish = PubSub.publish;
            beforeEach(function () {
                PubSub.publish = PubSub.publishSync;
            });
            afterEach(function () {
                PubSub.publish = publish;
            });
            it("should publish EVENT_COMPLETE on 4-band valid resistor and pass correct data values", function () {
                var data;
                PubSub.subscribe(resistor.EVENT_COMPLETE, function (msg, d) {
                    data = d;
                });
                specSetBandColors(white, blue, gold, violet);

                expect(data).not.toBeUndefined();
                expect(data.tolerance).toEqual(0.1);
                expect(data.resistance).toEqual(9.60);
                expect(data.temperature).toBeUndefined();
            });
            it("should publish EVENT_COMPLETE on 5-band valid resistor and pass correct data values", function () {
                var data, n = 0;
                PubSub.subscribe(resistor.EVENT_COMPLETE, function (msg, d) {
                    n += 1;
                    data = d;
                });
                specSetBandColors(white, blue, orange);
                expect(n).toEqual(0);
                resistor.setBandColor(yellow, 5);
                expect(n).toEqual(0);
                resistor.setBandColor(blue, 4);
                expect(n).toEqual(1);
                expect(data.tolerance).toEqual(4);
                expect(data.resistance).toEqual(963000000);
                expect(data.temperature).toBeUndefined();
            });
        });
    });
});
