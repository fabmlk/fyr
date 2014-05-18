YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Automaton",
        "BandView",
        "BandsView",
        "ColorSet",
        "Controller",
        "Resistor",
        "ResultView"
    ],
    "modules": [
        "helper.automaton",
        "helper.bandsview",
        "helper.colorset",
        "helper.resultview",
        "resistor.controller",
        "resistor.model"
    ],
    "allModules": [
        {
            "displayName": "helper.automaton",
            "name": "helper.automaton",
            "description": "module resistor uses this automaton/graph to detect invalid color schemes based on current resistor state"
        },
        {
            "displayName": "helper.bandsview",
            "name": "helper.bandsview",
            "description": "Helper for managing the html view of the bands in the resistor.view\nOn top of improved code readability in the resistor.view, this level of abstraction permits to adjust the html code of the bands\nwihtout modifying its internal logic, i.e, as long as the bandsview is constructed with its bands set at the correct index in the page,\nwe might decide to add or remove wrappers around them without modifying neither the resistor.view code, nor this helper"
        },
        {
            "displayName": "helper.colorset",
            "name": "helper.colorset",
            "description": "Defines the color range helper for a resistor with its 12 authorized values"
        },
        {
            "displayName": "helper.resultview",
            "name": "helper.resultview",
            "description": "Helper to represent the view of the result to display from a calculated resistor"
        },
        {
            "displayName": "resistor.controller",
            "name": "resistor.controller",
            "description": "Controller for the resistor"
        },
        {
            "displayName": "resistor.model",
            "name": "resistor.model",
            "description": "Defines a resistor model"
        }
    ]
} };
});