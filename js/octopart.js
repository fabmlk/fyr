/**
 * Defines interactions with octopart api and its view
 * @module octopart
 */
define(["jquery", "jquery-mobile"], function ($) {
    "use strict";

    // trick: using the octopart search page is easier to find the right url params:
    // example search page: http://octopart.com/partsearch#!?q=&filter[fields][specs.mounting_style.value][]=Through%20Hole&start=0&limit=10&filter[fields][specs.resistance_tolerance.value][]=%C2%B15%25&filter[fields][specs.pin_count.value][]=2&filter[fields][specs.resistance.value][]=20000&filter[fields][offers.seller.name][]=Digi-Key
    var apikey = "dcaf9eef",
        // JSONP pitfall: we cannot use JSONP directly with requirejs, remember that JSONP add a <script> tag to the header
        // and call a function expected to be defined globally for it to find: better not use globals with requirejs!
        // Neither should we use $.getJSON() nor $.ajax().
        // Instead use requirejs JSONP support by specifying a URL as dependency and "define" as the callback
        baseUrl = 'http://octopart.com/api/v3/parts/search?apikey=' + apikey + '&callback=define&include[]=imagesets',

        // builder octopart filter url
        filter = function (param, value) {
            return "&filter[fields][" + param + "][]=" + value;
        },

        // helper to the octopart url params
        octopartFilter = {
            distributor: "offers.seller.name",
            mounting: "specs.mounting_style.value", // mounting type
            temperature: "specs.temperature_coefficient.value", // temperature value
            terminations: "specs.pin_count.value", // number of pins = number of terminations
            tolerance: "specs.resistance_tolerance.value",
            resistance: "specs.resistance.value"
        },

        // if no results are found for a given resistor value, try with the range percantage rule up to this limit
        // Octopart has a rate limit of 3 HTTP requests/second per IP.
        MAX_FETCH_ATTEMPTS = 3,

        // referenced in the class
        RANGE_PERCENTAGE = 25 / 100;

    /**
     * Handles request, processing and view insertion of the octopart data to retrieve
     * @class Octopart
     * @param {jQuery} $datapage the jquery object of the page to be displayed items data (2nd page)
     * @param {jQuery} $detailspage the jquery object of the page to be displayed details and offers for an item (3rd page)
     */
    return function ($datapage, $detailspage) {
        var self = this;

        // init jqm widgets
        $datapage.find(":jqmData(role='listview')").listview();
        $detailspage.find(":jqmData(role='listview')").listview();
        //$datapage.pagecontainer();
        //$detailspage.pagecontainer();

        /**
         * Percentage value of the new range to apply when re-fetching data
         * @property RANGE_PERCENTAGE
         * @default 0.25
         * @type number the percentage value
         */
        this.RANGE_PERCENTAGE = RANGE_PERCENTAGE;

        /**
         * Parse results returned from an octopart query into a filtered/cleaner data object.
         * @method parseData
         * @param {Object} results the results returned by octopart query
         * @return {Object} a simplified data representation
         */
        this.parseData = function (results) {
            var data = [],
                getCurrencyOffers = function (prices) {
                    var keys;
                    // http://en.wikipedia.org/wiki/Currency_Symbols_%28Unicode_block%29
                    if (prices.EUR) {
                        return {
                            pricesArray: prices.EUR,
                            symbol: '\u20AC' // €
                        };
                    }
                    if (prices.USD) {
                        return {
                            pricesArray: prices.USD,
                            symbol: '$'
                        };
                    }
                    if (prices.GBP) {
                        return {
                            pricesArray: prices.GBP,
                            symbol: '\u20A4' // sterling
                        };
                    }
                    keys = Object.keys(prices);
                    // if some less-known foreign currency only available, get the 1st one and its 3-letter symbol name
                    return {
                        pricesArray: prices[keys[0]],
                        symbol: " " + keys[0]
                    };
                },

                // stringify the price stripped from ending  zeroes and the currency symbol
                formatPriceString = function (price, symbol) {
                    return price.split(/0*$/)[0] + symbol;
                },

                getOffersWithStock = function (res) {
                    var nbOffersInStock = 0;
                    return {
                        offers: res.item.offers.filter(function (offer) {
                            nbOffersInStock += offer.in_stock_quantity || 0;
                            return offer.in_stock_quantity > 0;
                        }),
                        total_stock: nbOffersInStock || "Non indiqué"
                    };
                };

            // the parsing loop
            $.each(results.results, function (i, res) {
                var item = {},
                    // octopart "in stock" filter does not work well for these: filter manually
                    offersInStock = getOffersWithStock(res);

                if (offersInStock.offers.length > 0) { // no offers in stock available
                    item.title = res.item.manufacturer.name + " " + res.item.mpn;
                    item.total_stock = offersInStock.total_stock;
                    item.image = (((res.item.imagesets || {})[0] || {}).small_image || {}).url || "/img/no-photo-available.jpg";

                    item.offers = [];
                    $.each(offersInStock.offers, function (i, offer) {
                        var currencyOffers = getCurrencyOffers(offer.prices);
                        item.offers.push({
                            seller: (offer.seller || {}).name || "Inconnu",
                            url: offer.product_url,
                            // watch out! pricesArray can be undefined: make it be an empty Array
                            prices: (currencyOffers.pricesArray || []).map(function (price) {
                                return {
                                    lot: price[0],
                                    price: formatPriceString(price[1], currencyOffers.symbol)
                                };
                            }),
                            stock: offer.in_stock_quantity || "Non indiqué"
                        });
                    });
                    // add item data
                    data.push(item);
                }
            });
            return data;
        };

        /**
         * Make an octopart request from a raw octopart url (or any url returning a json representation of the data: see demo version in resistor.view.js)
         * and returns a promise representation of this request with:
         *      resolved: the data were correctly fetched, wether results are empty or not.
         *              Passes the data as parsed by parsedData if results are found, nothing otherwise.
         *      rejected: a network connexion failed to the server or a bug occured. Passes requirejs error.requireType param.
         * if no result hits are returned the first time given the resistor values, it attempts to fetch new data with enlarged filters such as:
         *      1- remove tolerance value from the filters - retry
         *      2- if 1 not enough, enlarge resistor range values with RANGE_PERCENTAGE - retry
         *      3- remove temperature value anyway
         * This is performed in 3 steps as it is the limit of allowed octopart requests per second. We could decide to make more attemps by retrying after
         * a setTimeout > 1s but filters enhancement from the 2 other requests should be enough.
         * @method fetchRaw
         * @param {String} url the raw octopart url
         * @return {Promise} the promise representing the requested url
         */
        this.fetchRaw = function (url) {
            var nbFetchAttempts = 0,
                dataDeferred = $.Deferred(),

                recursiveFetchRaw = function (url) {
                    // TO DO: add some guard tests in those function if url is incorrect
                        // remove a filter and its value from the url
                    var removeFromUrl = function (filter) {
                            return url.replace(new RegExp("&filter\\[fields\\]\\[" + filter + "\\]\\[\\]=[^&]*"), "");
                        },
                        // returns the value matched by a filter
                        getValueFromUrl = function (filter) {
                            return new RegExp("\\[" + filter + "\\]\\[\\]=([^&]*)").exec(url)[1]; // the actual match is #1
                        },
                        // returns a new url parsed with modified value for the given filter
                        replaceInUrl = function (url, filter, value) {
                            return url.replace(new RegExp("(\\[" + filter + "\\]\\[\\])=[^&]*"), "$1=" + value);
                        },
                        // converts a single value resistance in its corresponding string range version with RANGE_PERCENTAGE rule applied
                        enlargeResistanceRange = function () {
                            var floated = parseFloat(getValueFromUrl(octopartFilter.resistance));
                            return '[' + (floated - floated * RANGE_PERCENTAGE) + " TO " + (floated + floated * RANGE_PERCENTAGE) + ']';
                        };

                    // fetch JSONP url
                    require([url], function (results) {
                        if (results.hits === 0) {// no results found
                            if (nbFetchAttempts < MAX_FETCH_ATTEMPTS) { // attemps remaining: enlarge again
                                nbFetchAttempts += 1;
                                switch (nbFetchAttempts) {
                                case 1:
                                    url = replaceInUrl(url, octopartFilter.resistance, enlargeResistanceRange());
                                    break;
                                case 2:
                                    url = removeFromUrl(octopartFilter.tolerance);
                                    break;
                                }
                                if (new RegExp(octopartFilter.temperature).test(url)) {
                                    url = removeFromUrl(octopartFilter.temperature);
                                }
                                recursiveFetchRaw(url); // try again
                            } else {
                                dataDeferred.resolve(); // resolve with no args = no data found
                            }
                        } else {
                            dataDeferred.resolve(self.parseData(results)); //good to go: resolve with data parsed
                        }

                    }, function (err) { // network error
                        dataDeferred.reject(err.requireType);
                    });
                };
            recursiveFetchRaw(url);
            return dataDeferred;
        };

        /**
         * Same as fetchRaw but instead of using a raw url, we use a config params mecanism from which to build the octopart url.
         * The supported params are:
         *      resistance: the resistance value
         *
         * @method fetch
         * @param {Object} params the config params object with the following supported values:
         * @param {Number} params.resistance the resistance value
         * @param {Number} params.tolerance the tolerance value
         * @param {Number} [params.temperature] the temperature value band scheme greater than 4-band
         * @param {Boolean} [params.filter.throughHole] the mounting type for basic circuits, should be true for 4-band, false otherwise (or else no results found!)
         * @param {Number} [params.filter.terminations] the number of terminations of the resistor, e.g. 2 for basic type
         * @param {String} [params.filter.distributor] the name of the distributor whom we want to restrict the search
         * @return {Promise} the promise representing the octopart query
         */
        this.fetch = function (params) {
            var url,
                formatSingleOrRange = function (value) {
                    return value instanceof Array ? '[' + value[0] + " TO " + value[1] + ']' : value;
                };

            url = baseUrl + filter(octopartFilter.tolerance, "%C2%B1" + (params.tolerance || 0) + "%25");
            url += filter(octopartFilter.resistance, formatSingleOrRange(params.resistance) || 0);
            if (params.temperature) {
                url += filter(octopartFilter.temperature, formatSingleOrRange(params.temperature));
            }
            if (params.filter) {
                if (params.filter.throughHole) {
                    url += filter(octopartFilter.mounting, "Through%20Hole");
                }
                if (params.filter.terminations) {
                    url += filter(octopartFilter.terminations, params.filter.terminations);
                }
                if (params.filter.distributor) {
                    url += filter(octopartFilter.distributor, params.filter.distributor);
                }
            }

            return this.fetchRaw(url); // returns promise
        };

        /**
         * Build and returns a jquery DOM representation of the parsed data optimised for listview widgets.
         * @method dataToListviews
         * @param {Object} data the parsed data
         * @return {Object} an object with the following properties:
         * @param {jQuery} jquery.items: a jquery collection with each item wrapped in <li> tags.
         * @param {Array} jquery.offers: an array whose elements are a jquery collection with each offer in <li> tags.
         */
        this.dataToListviews = function (data) {
            var html$Items = [], html$Offers = [];
            $.each(data, function (itemIndex, item) {
                html$Items.push($("<li ><a href='#detailspage'><img src='" + item.image + "' ></img>" + item.title + "<span class='ui-li-count'>" + item.total_stock + "</span></a></li>"));
                html$Offers[itemIndex] = [];
                $.each(item.offers, function (i, offer) {
                    html$Offers[itemIndex].push($("<li data-role='list-divider'><a href='" + offer.url + "' data-role='button'>" + offer.seller + "</a><span class='ui-li-aside'>En stock: " + offer.stock + "</span></li>"));
                    $.each(offer.prices, function (i, pricelot) {
                        // all is strings here, but for lot plural js cleverly casts a string into and int when using < > operators
                        html$Offers[itemIndex].push($("<li>" + pricelot.lot + " pièce" + (pricelot.lot > 1 ? "s" : "") +  "<span class='ui-li-aside'>" + pricelot.price + "</span></li>"));
                    });
                });
            });
            return {
                items: html$Items,
                offers: html$Offers
            };
        };


        /**
         * Display the parsed data with items in the $datapage listview and dynamically bind offers to its corresponding item in the $detailspage before
         * switching page.
         * @method display
         * @param {Object} data the parsed data
         */
        this.display = function (data) {
            var listviews, msg;
            if (!data) { // no results found
                msg = "<h1>Aucune données en stock ne correspondent à votre resistance.</h1>";
                msg += "<p>Suggestion: cette version suppose que les resistances recherchées sont optimisées pour des circuits électriques basiques.</p>";
                msg += "<p>Ainsi, certaines valeurs trop hautes ou avec coefficient de temperature (type 6 bandes) ne renvoient typiquement aucun résultats.</p>";
                this.displayRaw($datapage, "Désolé", $("<li data-icon='info'>" + msg + "</li>"));
            } else {
                listviews = this.dataToListviews(data);
                $(listviews.items).on("tap", function () {
                    var $item = $(this);
                    $.mobile.pageContainer.one("pagecontainerbeforeshow", function () {
                        self.displayRaw($detailspage, $item.children('a').text(), listviews.offers[$item.index()]);
                    }).one("pagecontainerbeforehide", function () {
                        self.displayRaw($detailspage); // erase html content here
                    });
                });
                this.displayRaw($datapage, data.length + " gammes trouvées", listviews.items);
            }
        };

        /**
         * Insert raw content in a listview widget
         * @method displayRaw
         * @param {jQuery} $where the jquery page where to find the listview
         * @param {String} headerText the text to set in the header of the page
         * @param {jQuery} $content the jquery content to insert in the listview
         */
        this.displayRaw = function ($where, headerText, $content) {
            var $header = $where.find(":jqmData(role='header') > h1"),
                $listview = $where.find(":jqmData(role='listview')");
            $header.text(headerText);
            $listview.html($content);
            $listview.listview("refresh");
        };
    };
});
