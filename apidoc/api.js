YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Automaton",
        "Color",
        "Resistor"
    ],
    "modules": [
        "automaton.model",
        "color.model",
        "resistor.model"
    ],
    "allModules": [
        {
            "displayName": "automaton.model",
            "name": "automaton.model",
            "description": "mode resistor uses this automaton/graph to detect invalid color schemes based on current resistor state"
        },
        {
            "displayName": "color.model",
            "name": "color.model",
            "description": "Defines a color for a resistor within its 11 authorized values range"
        },
        {
            "displayName": "resistor.model",
            "name": "resistor.model",
            "description": "Defines a resistor model"
        }
    ]
} };
});