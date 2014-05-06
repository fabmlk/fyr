YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Automaton",
        "Resistor"
    ],
    "modules": [
        "automaton.model",
        "color.helper",
        "resistor.model"
    ],
    "allModules": [
        {
            "displayName": "automaton.model",
            "name": "automaton.model",
            "description": "mode resistor uses this automaton/graph to detect invalid color schemes based on current resistor state"
        },
        {
            "displayName": "color.helper",
            "name": "color.helper",
            "description": "Defines the color range helper for a resistor with its 12 authorized values"
        },
        {
            "displayName": "resistor.model",
            "name": "resistor.model",
            "description": "Defines a resistor model"
        }
    ]
} };
});