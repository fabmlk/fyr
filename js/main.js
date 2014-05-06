requirejs.config({
    baseUrl: "js",
    paths: {
        "jquery-mobile": "../bower_components/jquery-mobile-bower/js/jquery.mobile-1.4.2",
        "jquery": "../bower_components/jquery/jquery",
        "pubsub": "../bower_components/pubsub-js/src/pubsub",
        "domready": "../bower_components/domready/ready"
    },
    shim: {
        "jquery-mobile": [ "jquery" ],
        "pubsub": {
            exports: 'PubSub'
        }
    }
});

require(['app'], function (app) {
    "use strict";

    app.initialize();
});
