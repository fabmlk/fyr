// Sample data for demo
// Remember we are using requirejs: needs to be wrapped in a define call!
//curl -g http://octopart.com/api/v3/parts/search?apikey=dcaf9eef&pretty_print=true&filter[fields][offers.seller.name][]=Digi-Key&filter[fields][specs.mounting_style.value][]=Through%20Hole&filter[fields][specs.pin_count.value][]=2&filter[fields][specs.resistance_tolerance.value][]=%C2%B15%25&filter[fields][specs.resistance.value][]=20000
define({
    "__class__": "SearchResponse",
    "facet_results": {
        "fields": {},
        "queries": {}
    },
    "hits": 9,
    "msec": 101,
    "request": {
        "__class__": "SearchRequest",
        "facet": {
            "fields": {},
            "queries": []
        },
        "filter": {
            "fields": {
                "offers.seller.name": [
                    "Digi-Key"
                ],
                "specs.mounting_style.value": [
                    "Through Hole"
                ],
                "specs.pin_count.value": [
                    "2"
                ],
                "specs.resistance.value": [
                    "20000"
                ],
                "specs.resistance_tolerance.value": [
                    "\u00b15%"
                ]
            },
            "queries": []
        },
        "limit": 10,
        "q": "",
        "sortby": "score desc",
        "start": 0,
        "stats": {}
    },
    "results": [
        {
            "__class__": "SearchResult",
            "item": {
                "__class__": "Part",
                "brand": {
                    "__class__": "Brand",
                    "homepage_url": "http://www.ohmite.com/",
                    "name": "Ohmite",
                    "uid": "574996437b3e808e"
                },
                "manufacturer": {
                    "__class__": "Manufacturer",
                    "homepage_url": "http://www.ohmite.com/",
                    "name": "Ohmite",
                    "uid": "5da998a375de8e6e"
                },
                "mpn": "20J20KE",
                "octopart_url": "http://octopart.com/20j20ke-ohmite-103325",
                "offers": [
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 937,
                        "is_authorized": true,
                        "last_updated": "2014-05-09T06:35:54Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "DKK": [
                                [
                                    1,
                                    "32.16000"
                                ],
                                [
                                    25,
                                    "28.93000"
                                ],
                                [
                                    100,
                                    "25.62000"
                                ],
                                [
                                    250,
                                    "21.73000"
                                ],
                                [
                                    500,
                                    "19.20000"
                                ]
                            ],
                            "EUR": [
                                [
                                    1,
                                    "4.30000"
                                ],
                                [
                                    25,
                                    "3.87000"
                                ],
                                [
                                    100,
                                    "3.42000"
                                ],
                                [
                                    250,
                                    "2.90000"
                                ],
                                [
                                    500,
                                    "2.57000"
                                ]
                            ],
                            "GBP": [
                                [
                                    1,
                                    "2.77200"
                                ],
                                [
                                    25,
                                    "2.49400"
                                ],
                                [
                                    100,
                                    "2.20900"
                                ],
                                [
                                    250,
                                    "1.87300"
                                ],
                                [
                                    500,
                                    "1.65500"
                                ]
                            ],
                            "NOK": [
                                [
                                    1,
                                    "36.04000"
                                ],
                                [
                                    25,
                                    "32.42000"
                                ],
                                [
                                    100,
                                    "28.72000"
                                ],
                                [
                                    250,
                                    "24.35000"
                                ],
                                [
                                    500,
                                    "21.52000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0002afe&vpid=99117475",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "GB",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.farnell.com/",
                            "name": "Farnell",
                            "uid": "58989d9272cd8b5f"
                        },
                        "sku": "1130027"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 937,
                        "is_authorized": true,
                        "last_updated": "2014-05-08T14:36:01Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "2.20000"
                                ],
                                [
                                    25,
                                    "2.20000"
                                ],
                                [
                                    100,
                                    "1.89000"
                                ],
                                [
                                    250,
                                    "1.89000"
                                ],
                                [
                                    500,
                                    "1.76000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart.com/click/vptrack?ak=dcaf9eef&sig=0fc6309&vpid=3010814",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.newark.com",
                            "name": "Newark",
                            "uid": "d294179ef2900153"
                        },
                        "sku": "64K7984"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": 59,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 0,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T13:16:11Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": "Bulk",
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "2.18000"
                                ],
                                [
                                    100,
                                    "1.79000"
                                ],
                                [
                                    500,
                                    "1.61040"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=09831c6&vpid=1534042",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.digikey.com",
                            "name": "Digi-Key",
                            "uid": "2c3be9310496fffc"
                        },
                        "sku": "20J20KE-ND"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": 56,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 644,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T09:48:21Z",
                        "moq": 25,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    25,
                                    "2.52000"
                                ],
                                [
                                    150,
                                    "2.49000"
                                ],
                                [
                                    300,
                                    "2.35000"
                                ],
                                [
                                    750,
                                    "1.82000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0872b1c&vpid=65741861",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.sager.com/",
                            "name": "Sager",
                            "uid": "8ec14bcb9b775d06"
                        },
                        "sku": "20J20KE"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 259,
                        "is_authorized": true,
                        "last_updated": "2014-05-16T09:03:51Z",
                        "moq": null,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "3.29000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=075c48f&vpid=39017669",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.mouser.com",
                            "name": "Mouser",
                            "uid": "a5e060ea85e77627"
                        },
                        "sku": "588-20J20KE"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 560,
                        "is_authorized": true,
                        "last_updated": "2014-05-16T08:16:08Z",
                        "moq": null,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    10,
                                    "2.44400"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=06477d7&vpid=83134079",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://ttiinc.com",
                            "name": "TTI",
                            "uid": "75dcb0d65f0ca61b"
                        },
                        "sku": "20J20KE"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 937,
                        "is_authorized": true,
                        "last_updated": "2014-05-16T05:29:44Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "SGD": [
                                [
                                    1,
                                    "3.36000"
                                ],
                                [
                                    100,
                                    "2.60000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=007dd1d&vpid=38349707",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "CN",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.element14.com/",
                            "name": "element14 APAC",
                            "uid": "cdc808c2c94e1e0f"
                        },
                        "sku": "1130027"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": 8,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 460,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T11:18:48Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": 0,
                        "order_multiple": null,
                        "packaging": "Bulk",
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "2.72000"
                                ],
                                [
                                    10,
                                    "2.60000"
                                ],
                                [
                                    50,
                                    "2.39000"
                                ],
                                [
                                    100,
                                    "2.19000"
                                ],
                                [
                                    250,
                                    "2.02000"
                                ],
                                [
                                    500,
                                    "1.88000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=01915ed&vpid=7999157",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.onlinecomponents.com",
                            "name": "Onlinecomponents.com",
                            "uid": "e3fd26f7c3e6303a"
                        },
                        "sku": "20J20KE"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 404,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T08:30:53Z",
                        "moq": null,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "2.72000"
                                ],
                                [
                                    10,
                                    "2.60000"
                                ],
                                [
                                    50,
                                    "2.39000"
                                ],
                                [
                                    100,
                                    "2.19000"
                                ],
                                [
                                    250,
                                    "2.02000"
                                ],
                                [
                                    500,
                                    "1.88000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=02ce768&vpid=16128914",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": false,
                            "homepage_url": "http://masterdistributors.com/",
                            "name": "Master Electronics",
                            "uid": "a89e6d948bdb7b59"
                        },
                        "sku": "20J20KE"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 0,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T09:42:13Z",
                        "moq": null,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "2.63000"
                                ],
                                [
                                    50,
                                    "2.41000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0a79d58&vpid=46677633",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://alliedelec.com",
                            "name": "Allied Electronics",
                            "uid": "f9e13cebd0892a26"
                        },
                        "sku": "70023113"
                    }
                ],
                "uid": "56ce9fc5e0358909",
                "uid_v2": 10332508266
            },
            "snippet": "Resistor; Wirewound; Res 20 Kilohms; Pwr-Rtg 10 W; Tol 5%; Axial; Vitreous Enamel"
        },
        {
            "__class__": "SearchResult",
            "item": {
                "__class__": "Part",
                "brand": {
                    "__class__": "Brand",
                    "homepage_url": "http://www.ohmite.com/",
                    "name": "Ohmite",
                    "uid": "574996437b3e808e"
                },
                "manufacturer": {
                    "__class__": "Manufacturer",
                    "homepage_url": "http://www.ohmite.com/",
                    "name": "Ohmite",
                    "uid": "5da998a375de8e6e"
                },
                "mpn": "B12J20KE",
                "octopart_url": "http://octopart.com/b12j20ke-ohmite-145288",
                "offers": [
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 1405,
                        "is_authorized": true,
                        "last_updated": "2014-05-09T06:35:54Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "DKK": [
                                [
                                    1,
                                    "45.98000"
                                ],
                                [
                                    25,
                                    "41.71000"
                                ],
                                [
                                    100,
                                    "37.07000"
                                ],
                                [
                                    250,
                                    "33.18000"
                                ]
                            ],
                            "EUR": [
                                [
                                    1,
                                    "6.14000"
                                ],
                                [
                                    25,
                                    "5.57000"
                                ],
                                [
                                    100,
                                    "4.95000"
                                ],
                                [
                                    250,
                                    "4.43000"
                                ]
                            ],
                            "GBP": [
                                [
                                    1,
                                    "3.96400"
                                ],
                                [
                                    25,
                                    "3.59600"
                                ],
                                [
                                    100,
                                    "3.19600"
                                ],
                                [
                                    250,
                                    "2.86000"
                                ]
                            ],
                            "NOK": [
                                [
                                    1,
                                    "51.53000"
                                ],
                                [
                                    25,
                                    "46.75000"
                                ],
                                [
                                    100,
                                    "41.55000"
                                ],
                                [
                                    250,
                                    "37.18000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0c87f9e&vpid=99117911",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "GB",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.farnell.com/",
                            "name": "Farnell",
                            "uid": "58989d9272cd8b5f"
                        },
                        "sku": "1129330"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 1405,
                        "is_authorized": true,
                        "last_updated": "2014-05-08T14:36:01Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "3.77000"
                                ],
                                [
                                    25,
                                    "3.42000"
                                ],
                                [
                                    100,
                                    "3.04000"
                                ],
                                [
                                    250,
                                    "2.72000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart.com/click/vptrack?ak=dcaf9eef&sig=0e779e3&vpid=3009738",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.newark.com",
                            "name": "Newark",
                            "uid": "d294179ef2900153"
                        },
                        "sku": "64K3708"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": 28,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 115,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T13:16:11Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": "Bulk",
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "3.83000"
                                ],
                                [
                                    50,
                                    "3.44000"
                                ],
                                [
                                    100,
                                    "3.07000"
                                ],
                                [
                                    250,
                                    "2.69000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=03c9044&vpid=1947381",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.digikey.com",
                            "name": "Digi-Key",
                            "uid": "2c3be9310496fffc"
                        },
                        "sku": "B12J20KE-ND"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 1405,
                        "is_authorized": true,
                        "last_updated": "2014-05-16T05:29:44Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "SGD": [
                                [
                                    1,
                                    "5.90000"
                                ],
                                [
                                    50,
                                    "4.82000"
                                ],
                                [
                                    100,
                                    "4.30000"
                                ],
                                [
                                    250,
                                    "3.78000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0079278&vpid=38350250",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "CN",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.element14.com/",
                            "name": "element14 APAC",
                            "uid": "cdc808c2c94e1e0f"
                        },
                        "sku": "1129330"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 80,
                        "is_authorized": true,
                        "last_updated": "2014-05-16T09:03:51Z",
                        "moq": null,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "3.81000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0fcc1da&vpid=37809622",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.mouser.com",
                            "name": "Mouser",
                            "uid": "a5e060ea85e77627"
                        },
                        "sku": "588-B12J20KE"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": 10,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 50,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T11:18:48Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": 0,
                        "order_multiple": null,
                        "packaging": "Bulk",
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "3.60000"
                                ],
                                [
                                    25,
                                    "3.39000"
                                ],
                                [
                                    50,
                                    "3.22000"
                                ],
                                [
                                    100,
                                    "2.98000"
                                ],
                                [
                                    250,
                                    "2.66000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0c71e11&vpid=7992700",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.onlinecomponents.com",
                            "name": "Onlinecomponents.com",
                            "uid": "e3fd26f7c3e6303a"
                        },
                        "sku": "B12J20KE"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 44,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T08:30:53Z",
                        "moq": null,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "3.60000"
                                ],
                                [
                                    25,
                                    "3.39000"
                                ],
                                [
                                    50,
                                    "3.22000"
                                ],
                                [
                                    100,
                                    "2.98000"
                                ],
                                [
                                    250,
                                    "2.66000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0a1c9ec&vpid=99994500",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": false,
                            "homepage_url": "http://masterdistributors.com/",
                            "name": "Master Electronics",
                            "uid": "a89e6d948bdb7b59"
                        },
                        "sku": "B12J20KE"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 12,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T09:42:13Z",
                        "moq": null,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "3.64000"
                                ],
                                [
                                    25,
                                    "3.47000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0ab8099&vpid=46666425",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://alliedelec.com",
                            "name": "Allied Electronics",
                            "uid": "f9e13cebd0892a26"
                        },
                        "sku": "70022605"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": 70,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 0,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T09:48:21Z",
                        "moq": 50,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    50,
                                    "3.81000"
                                ],
                                [
                                    125,
                                    "3.16000"
                                ],
                                [
                                    250,
                                    "2.74000"
                                ],
                                [
                                    525,
                                    "2.65000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0d01116&vpid=65744234",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.sager.com/",
                            "name": "Sager",
                            "uid": "8ec14bcb9b775d06"
                        },
                        "sku": "B12J20KE"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 0,
                        "is_authorized": true,
                        "last_updated": "2014-05-16T08:16:08Z",
                        "moq": null,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {},
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=07f6322&vpid=83135283",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://ttiinc.com",
                            "name": "TTI",
                            "uid": "75dcb0d65f0ca61b"
                        },
                        "sku": "B12J20KE"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 26,
                        "is_authorized": false,
                        "last_updated": "2014-05-12T14:58:53Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": 1,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "3.81920"
                                ],
                                [
                                    13,
                                    "3.65800"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0caace1&vpid=107641850",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "GB",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.tencell.com",
                            "name": "Tencell",
                            "uid": "964d5347f74c458a"
                        },
                        "sku": "B12J20KE"
                    }
                ],
                "uid": "0175c87d139bdeb2",
                "uid_v2": 14528805942
            },
            "snippet": "Resistor; Wirewound; Res 20 Kilohms; Pwr-Rtg 12 W; Tol 5%; Axial; Vitreous Enamel"
        },
        {
            "__class__": "SearchResult",
            "item": {
                "__class__": "Part",
                "brand": {
                    "__class__": "Brand",
                    "homepage_url": "http://www.ohmite.com/",
                    "name": "Ohmite",
                    "uid": "574996437b3e808e"
                },
                "manufacturer": {
                    "__class__": "Manufacturer",
                    "homepage_url": "http://www.ohmite.com/",
                    "name": "Ohmite",
                    "uid": "5da998a375de8e6e"
                },
                "mpn": "OD203JE",
                "octopart_url": "http://octopart.com/od203je-ohmite-148706",
                "offers": [
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 0,
                        "is_authorized": true,
                        "last_updated": "2014-05-09T06:35:54Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "DKK": [
                                [
                                    1,
                                    "5.12000"
                                ],
                                [
                                    50,
                                    "4.81000"
                                ],
                                [
                                    100,
                                    "4.25000"
                                ],
                                [
                                    250,
                                    "4.05000"
                                ],
                                [
                                    500,
                                    "3.84000"
                                ]
                            ],
                            "EUR": [
                                [
                                    1,
                                    "0.68000"
                                ],
                                [
                                    50,
                                    "0.64000"
                                ],
                                [
                                    100,
                                    "0.57000"
                                ],
                                [
                                    250,
                                    "0.54000"
                                ],
                                [
                                    500,
                                    "0.51000"
                                ]
                            ],
                            "GBP": [
                                [
                                    1,
                                    "0.44100"
                                ],
                                [
                                    50,
                                    "0.41500"
                                ],
                                [
                                    100,
                                    "0.36600"
                                ],
                                [
                                    250,
                                    "0.34900"
                                ],
                                [
                                    500,
                                    "0.33100"
                                ]
                            ],
                            "NOK": [
                                [
                                    1,
                                    "5.73000"
                                ],
                                [
                                    50,
                                    "5.40000"
                                ],
                                [
                                    100,
                                    "4.76000"
                                ],
                                [
                                    250,
                                    "4.54000"
                                ],
                                [
                                    500,
                                    "4.30000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=07241bf&vpid=99118472",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "GB",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.farnell.com/",
                            "name": "Farnell",
                            "uid": "58989d9272cd8b5f"
                        },
                        "sku": "1129729"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 147,
                        "is_authorized": true,
                        "last_updated": "2014-05-08T14:36:01Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "0.30000"
                                ],
                                [
                                    50,
                                    "0.30000"
                                ],
                                [
                                    100,
                                    "0.30000"
                                ],
                                [
                                    250,
                                    "0.30000"
                                ],
                                [
                                    500,
                                    "0.28000"
                                ],
                                [
                                    1000,
                                    "0.28000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart.com/click/vptrack?ak=dcaf9eef&sig=0a76cf1&vpid=3010194",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.newark.com",
                            "name": "Newark",
                            "uid": "d294179ef2900153"
                        },
                        "sku": "64K5100"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": 20,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 597,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T13:16:11Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": "Bulk",
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "0.50000"
                                ],
                                [
                                    100,
                                    "0.41000"
                                ],
                                [
                                    500,
                                    "0.37000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0783ac6&vpid=1509363",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.digikey.com",
                            "name": "Digi-Key",
                            "uid": "2c3be9310496fffc"
                        },
                        "sku": "OD203JE-ND"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 972,
                        "is_authorized": true,
                        "last_updated": "2014-05-16T09:03:51Z",
                        "moq": null,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "0.42000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=09cff65&vpid=37636336",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.mouser.com",
                            "name": "Mouser",
                            "uid": "a5e060ea85e77627"
                        },
                        "sku": "588-OD203JE"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": 16,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 750,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T11:18:48Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": 0,
                        "order_multiple": null,
                        "packaging": "Bulk",
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "0.44600"
                                ],
                                [
                                    25,
                                    "0.43600"
                                ],
                                [
                                    50,
                                    "0.39600"
                                ],
                                [
                                    100,
                                    "0.36600"
                                ],
                                [
                                    250,
                                    "0.34700"
                                ],
                                [
                                    500,
                                    "0.32700"
                                ],
                                [
                                    1000,
                                    "0.29600"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=04f8059&vpid=11519334",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.onlinecomponents.com",
                            "name": "Onlinecomponents.com",
                            "uid": "e3fd26f7c3e6303a"
                        },
                        "sku": "OD203JE"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 660,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T08:30:53Z",
                        "moq": null,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "0.44600"
                                ],
                                [
                                    25,
                                    "0.43600"
                                ],
                                [
                                    50,
                                    "0.39600"
                                ],
                                [
                                    100,
                                    "0.36600"
                                ],
                                [
                                    250,
                                    "0.34700"
                                ],
                                [
                                    500,
                                    "0.32700"
                                ],
                                [
                                    1000,
                                    "0.29600"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=016cd79&vpid=99995313",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": false,
                            "homepage_url": "http://masterdistributors.com/",
                            "name": "Master Electronics",
                            "uid": "a89e6d948bdb7b59"
                        },
                        "sku": "OD203JE"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 593,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T09:42:13Z",
                        "moq": null,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "0.46000"
                                ],
                                [
                                    50,
                                    "0.42000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0ecd2dc&vpid=46666577",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://alliedelec.com",
                            "name": "Allied Electronics",
                            "uid": "f9e13cebd0892a26"
                        },
                        "sku": "70022852"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 350,
                        "is_authorized": true,
                        "last_updated": "2014-05-16T08:16:08Z",
                        "moq": null,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    25,
                                    "0.44000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0e64fc1&vpid=83136450",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://ttiinc.com",
                            "name": "TTI",
                            "uid": "75dcb0d65f0ca61b"
                        },
                        "sku": "OD203JE"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": 112,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 0,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T09:48:21Z",
                        "moq": 100,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    100,
                                    "0.31650"
                                ],
                                [
                                    1200,
                                    "0.31210"
                                ],
                                [
                                    2400,
                                    "0.29560"
                                ],
                                [
                                    4800,
                                    "0.28440"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=038c010&vpid=65748146",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.sager.com/",
                            "name": "Sager",
                            "uid": "8ec14bcb9b775d06"
                        },
                        "sku": "OD203JE"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 300,
                        "is_authorized": true,
                        "last_updated": "2014-05-16T05:29:44Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "SGD": [
                                [
                                    1,
                                    "0.77000"
                                ],
                                [
                                    100,
                                    "0.57400"
                                ],
                                [
                                    500,
                                    "0.51800"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0d1d4a9&vpid=38349652",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "CN",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.element14.com/",
                            "name": "element14 APAC",
                            "uid": "cdc808c2c94e1e0f"
                        },
                        "sku": "1129729"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 311,
                        "is_authorized": false,
                        "last_updated": "2014-05-12T14:58:53Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": 1,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "0.34970"
                                ],
                                [
                                    125,
                                    "0.30760"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=042c028&vpid=107908068",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "GB",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.tencell.com",
                            "name": "Tencell",
                            "uid": "964d5347f74c458a"
                        },
                        "sku": "OD203JE"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 61,
                        "is_authorized": false,
                        "last_updated": "2014-05-15T21:04:20Z",
                        "moq": null,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "1.27000"
                                ],
                                [
                                    5,
                                    "1.01600"
                                ],
                                [
                                    21,
                                    "0.63500"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0af263a&vpid=20018386",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.questcomp.com",
                            "name": "Quest",
                            "uid": "b29977939293615e"
                        },
                        "sku": "OD203JE"
                    }
                ],
                "uid": "bec977c1df4d610e",
                "uid_v2": 14870655893
            },
            "snippet": "Resistor; Carbon Composition; Res 20 Kilohms; Pwr-Rtg 0.25 W; Tol 5%; Axial"
        },
        {
            "__class__": "SearchResult",
            "item": {
                "__class__": "Part",
                "brand": {
                    "__class__": "Brand",
                    "homepage_url": "http://www.ohmite.com/",
                    "name": "Ohmite",
                    "uid": "574996437b3e808e"
                },
                "manufacturer": {
                    "__class__": "Manufacturer",
                    "homepage_url": "http://www.ohmite.com/",
                    "name": "Ohmite",
                    "uid": "5da998a375de8e6e"
                },
                "mpn": "OF203JE",
                "octopart_url": "http://octopart.com/of203je-ohmite-144251",
                "offers": [
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 333,
                        "is_authorized": true,
                        "last_updated": "2014-05-09T06:35:54Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "DKK": [
                                [
                                    1,
                                    "6.33000"
                                ],
                                [
                                    50,
                                    "5.95000"
                                ],
                                [
                                    100,
                                    "5.27000"
                                ],
                                [
                                    250,
                                    "5.00000"
                                ],
                                [
                                    500,
                                    "4.74000"
                                ]
                            ],
                            "EUR": [
                                [
                                    1,
                                    "0.85000"
                                ],
                                [
                                    50,
                                    "0.80000"
                                ],
                                [
                                    100,
                                    "0.70000"
                                ],
                                [
                                    250,
                                    "0.67000"
                                ],
                                [
                                    500,
                                    "0.63000"
                                ]
                            ],
                            "GBP": [
                                [
                                    1,
                                    "0.54600"
                                ],
                                [
                                    50,
                                    "0.51300"
                                ],
                                [
                                    100,
                                    "0.45400"
                                ],
                                [
                                    250,
                                    "0.43100"
                                ],
                                [
                                    500,
                                    "0.40900"
                                ]
                            ],
                            "NOK": [
                                [
                                    1,
                                    "7.10000"
                                ],
                                [
                                    50,
                                    "6.67000"
                                ],
                                [
                                    100,
                                    "5.90000"
                                ],
                                [
                                    250,
                                    "5.60000"
                                ],
                                [
                                    500,
                                    "5.32000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=030bffd&vpid=99118509",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "GB",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.farnell.com/",
                            "name": "Farnell",
                            "uid": "58989d9272cd8b5f"
                        },
                        "sku": "1158607"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 333,
                        "is_authorized": true,
                        "last_updated": "2014-05-08T14:36:01Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "0.37200"
                                ],
                                [
                                    50,
                                    "0.37200"
                                ],
                                [
                                    100,
                                    "0.37200"
                                ],
                                [
                                    250,
                                    "0.37200"
                                ],
                                [
                                    500,
                                    "0.34700"
                                ],
                                [
                                    1000,
                                    "0.34600"
                                ]
                            ]
                        },
                        "product_url": "http://octopart.com/click/vptrack?ak=dcaf9eef&sig=0f8ecb1&vpid=3010248",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.newark.com",
                            "name": "Newark",
                            "uid": "d294179ef2900153"
                        },
                        "sku": "64K5166"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": 16,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 800,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T11:18:48Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": 0,
                        "order_multiple": null,
                        "packaging": "Bulk",
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "0.52000"
                                ],
                                [
                                    50,
                                    "0.48500"
                                ],
                                [
                                    100,
                                    "0.44600"
                                ],
                                [
                                    250,
                                    "0.41600"
                                ],
                                [
                                    500,
                                    "0.38600"
                                ],
                                [
                                    1000,
                                    "0.36600"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0b2ccd6&vpid=11519011",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.onlinecomponents.com",
                            "name": "Onlinecomponents.com",
                            "uid": "e3fd26f7c3e6303a"
                        },
                        "sku": "OF203JE"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": 42,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 0,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T13:16:11Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": "Bulk",
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "0.65000"
                                ],
                                [
                                    100,
                                    "0.53000"
                                ],
                                [
                                    500,
                                    "0.47000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0dc61b1&vpid=1519908",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.digikey.com",
                            "name": "Digi-Key",
                            "uid": "2c3be9310496fffc"
                        },
                        "sku": "OF203JE-ND"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 704,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T08:30:53Z",
                        "moq": null,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "0.52000"
                                ],
                                [
                                    50,
                                    "0.48500"
                                ],
                                [
                                    100,
                                    "0.44600"
                                ],
                                [
                                    250,
                                    "0.41600"
                                ],
                                [
                                    500,
                                    "0.38600"
                                ],
                                [
                                    1000,
                                    "0.36600"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=02ffa7f&vpid=99995392",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": false,
                            "homepage_url": "http://masterdistributors.com/",
                            "name": "Master Electronics",
                            "uid": "a89e6d948bdb7b59"
                        },
                        "sku": "OF203JE"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 291,
                        "is_authorized": true,
                        "last_updated": "2014-05-16T09:03:51Z",
                        "moq": null,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "0.52000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0d9799a&vpid=37636306",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.mouser.com",
                            "name": "Mouser",
                            "uid": "a5e060ea85e77627"
                        },
                        "sku": "588-OF203JE"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 105,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T09:42:13Z",
                        "moq": null,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "0.53000"
                                ],
                                [
                                    50,
                                    "0.49000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=008966e&vpid=46678979",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://alliedelec.com",
                            "name": "Allied Electronics",
                            "uid": "f9e13cebd0892a26"
                        },
                        "sku": "70022870"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": 112,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 0,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T09:48:21Z",
                        "moq": 500,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    500,
                                    "0.39740"
                                ],
                                [
                                    1000,
                                    "0.39180"
                                ],
                                [
                                    1900,
                                    "0.37100"
                                ],
                                [
                                    3800,
                                    "0.35900"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0ae0e69&vpid=65747317",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.sager.com/",
                            "name": "Sager",
                            "uid": "8ec14bcb9b775d06"
                        },
                        "sku": "OF203JE"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 333,
                        "is_authorized": true,
                        "last_updated": "2014-05-16T05:29:44Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "SGD": [
                                [
                                    1,
                                    "1.00000"
                                ],
                                [
                                    100,
                                    "0.74200"
                                ],
                                [
                                    500,
                                    "0.65800"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=06b0ee1&vpid=38350178",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "CN",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.element14.com/",
                            "name": "element14 APAC",
                            "uid": "cdc808c2c94e1e0f"
                        },
                        "sku": "1158607"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 0,
                        "is_authorized": true,
                        "last_updated": "2014-05-16T08:16:08Z",
                        "moq": null,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {},
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0c02fe8&vpid=83136573",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://ttiinc.com",
                            "name": "TTI",
                            "uid": "75dcb0d65f0ca61b"
                        },
                        "sku": "OF203JE"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 252,
                        "is_authorized": false,
                        "last_updated": "2014-05-12T14:58:53Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": 1,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "0.43200"
                                ],
                                [
                                    125,
                                    "0.38440"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0d4fa07&vpid=107642480",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "GB",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.tencell.com",
                            "name": "Tencell",
                            "uid": "964d5347f74c458a"
                        },
                        "sku": "OF203JE"
                    }
                ],
                "uid": "c4af0da7d2b21b68",
                "uid_v2": 14425106629
            },
            "snippet": "Resistor; Carbon Composition; Res 20 Kilohms; Pwr-Rtg 0.5 W; Tol 5%; Axial"
        },
        {
            "__class__": "SearchResult",
            "item": {
                "__class__": "Part",
                "brand": {
                    "__class__": "Brand",
                    "homepage_url": "http://www.ohmite.com/",
                    "name": "Ohmite",
                    "uid": "574996437b3e808e"
                },
                "manufacturer": {
                    "__class__": "Manufacturer",
                    "homepage_url": "http://www.ohmite.com/",
                    "name": "Ohmite",
                    "uid": "5da998a375de8e6e"
                },
                "mpn": "25J20KE",
                "octopart_url": "http://octopart.com/25j20ke-ohmite-137652",
                "offers": [
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 617,
                        "is_authorized": true,
                        "last_updated": "2014-05-09T06:35:54Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "DKK": [
                                [
                                    1,
                                    "30.45000"
                                ],
                                [
                                    25,
                                    "27.41000"
                                ],
                                [
                                    100,
                                    "24.19000"
                                ],
                                [
                                    250,
                                    "20.67000"
                                ],
                                [
                                    500,
                                    "18.21000"
                                ]
                            ],
                            "EUR": [
                                [
                                    1,
                                    "4.07000"
                                ],
                                [
                                    25,
                                    "3.66000"
                                ],
                                [
                                    100,
                                    "3.23000"
                                ],
                                [
                                    250,
                                    "2.76000"
                                ],
                                [
                                    500,
                                    "2.43000"
                                ]
                            ],
                            "GBP": [
                                [
                                    1,
                                    "2.62500"
                                ],
                                [
                                    25,
                                    "2.36300"
                                ],
                                [
                                    100,
                                    "2.08500"
                                ],
                                [
                                    250,
                                    "1.78200"
                                ],
                                [
                                    500,
                                    "1.57000"
                                ]
                            ],
                            "NOK": [
                                [
                                    1,
                                    "34.13000"
                                ],
                                [
                                    25,
                                    "30.72000"
                                ],
                                [
                                    100,
                                    "27.11000"
                                ],
                                [
                                    250,
                                    "23.17000"
                                ],
                                [
                                    500,
                                    "20.41000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=049c45c&vpid=99117587",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "GB",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.farnell.com/",
                            "name": "Farnell",
                            "uid": "58989d9272cd8b5f"
                        },
                        "sku": "1130116"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 617,
                        "is_authorized": true,
                        "last_updated": "2014-05-08T14:36:01Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "3.21000"
                                ],
                                [
                                    25,
                                    "2.89000"
                                ],
                                [
                                    100,
                                    "2.55000"
                                ],
                                [
                                    250,
                                    "2.18000"
                                ],
                                [
                                    500,
                                    "1.92000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart.com/click/vptrack?ak=dcaf9eef&sig=089feb6&vpid=3010953",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.newark.com",
                            "name": "Newark",
                            "uid": "d294179ef2900153"
                        },
                        "sku": "64K8279"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": 42,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 380,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T13:16:11Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": "Bulk",
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "3.11000"
                                ],
                                [
                                    100,
                                    "2.34000"
                                ],
                                [
                                    500,
                                    "1.72000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0daaab2&vpid=2116147",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.digikey.com",
                            "name": "Digi-Key",
                            "uid": "2c3be9310496fffc"
                        },
                        "sku": "25J20KE-ND"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 870,
                        "is_authorized": true,
                        "last_updated": "2014-05-16T08:16:08Z",
                        "moq": null,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    10,
                                    "2.31500"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0e48f98&vpid=83134299",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://ttiinc.com",
                            "name": "TTI",
                            "uid": "75dcb0d65f0ca61b"
                        },
                        "sku": "25J20KE"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 289,
                        "is_authorized": true,
                        "last_updated": "2014-05-16T09:03:51Z",
                        "moq": null,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "3.13000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0328802&vpid=37721019",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.mouser.com",
                            "name": "Mouser",
                            "uid": "a5e060ea85e77627"
                        },
                        "sku": "588-25J20KE"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": 56,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 442,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T09:48:21Z",
                        "moq": 100,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    100,
                                    "2.38000"
                                ],
                                [
                                    150,
                                    "2.35000"
                                ],
                                [
                                    325,
                                    "2.23000"
                                ],
                                [
                                    800,
                                    "1.73000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=00db228&vpid=65742153",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.sager.com/",
                            "name": "Sager",
                            "uid": "8ec14bcb9b775d06"
                        },
                        "sku": "25J20KE"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 622,
                        "is_authorized": true,
                        "last_updated": "2014-05-16T05:29:44Z",
                        "moq": 2,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "SGD": [
                                [
                                    2,
                                    "4.55000"
                                ],
                                [
                                    50,
                                    "4.33000"
                                ],
                                [
                                    100,
                                    "4.10000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=02ee52b&vpid=38351600",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "CN",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.element14.com/",
                            "name": "element14 APAC",
                            "uid": "cdc808c2c94e1e0f"
                        },
                        "sku": "1130116"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 130,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T08:30:53Z",
                        "moq": null,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "3.08000"
                                ],
                                [
                                    10,
                                    "2.47000"
                                ],
                                [
                                    50,
                                    "2.27000"
                                ],
                                [
                                    100,
                                    "2.11000"
                                ],
                                [
                                    250,
                                    "2.01000"
                                ],
                                [
                                    500,
                                    "1.86000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=083e78d&vpid=16129168",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": false,
                            "homepage_url": "http://masterdistributors.com/",
                            "name": "Master Electronics",
                            "uid": "a89e6d948bdb7b59"
                        },
                        "sku": "25J20KE"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 76,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T09:42:13Z",
                        "moq": null,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "2.49000"
                                ],
                                [
                                    50,
                                    "2.29000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=04a4944&vpid=46665548",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://alliedelec.com",
                            "name": "Allied Electronics",
                            "uid": "f9e13cebd0892a26"
                        },
                        "sku": "70023232"
                    }
                ],
                "uid": "d06e1966ecbc0fa9",
                "uid_v2": 13765242304
            },
            "snippet": "Resistor; Wirewound; Res 20 Kilohms; Pwr-Rtg 5 W; Tol 5%; Axial; Vitreous Enamel"
        },
        {
            "__class__": "SearchResult",
            "item": {
                "__class__": "Part",
                "brand": {
                    "__class__": "Brand",
                    "homepage_url": null,
                    "name": "Dale",
                    "uid": "8abb4bb1a7bc5d7c"
                },
                "manufacturer": {
                    "__class__": "Manufacturer",
                    "homepage_url": null,
                    "name": "Dale",
                    "uid": "e7382232ce3f34ff"
                },
                "mpn": "CW00520K00JE73",
                "octopart_url": "http://octopart.com/cw00520k00je73-dale-1262015",
                "offers": [
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 49,
                        "is_authorized": true,
                        "last_updated": "2014-05-09T06:35:54Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "DKK": [
                                [
                                    1,
                                    "8.67000"
                                ],
                                [
                                    25,
                                    "7.23000"
                                ],
                                [
                                    100,
                                    "6.90000"
                                ],
                                [
                                    500,
                                    "6.19000"
                                ],
                                [
                                    1000,
                                    "5.85000"
                                ]
                            ],
                            "EUR": [
                                [
                                    1,
                                    "1.16000"
                                ],
                                [
                                    25,
                                    "0.97000"
                                ],
                                [
                                    100,
                                    "0.92000"
                                ],
                                [
                                    500,
                                    "0.83000"
                                ],
                                [
                                    1000,
                                    "0.78000"
                                ]
                            ],
                            "GBP": [
                                [
                                    1,
                                    "0.74700"
                                ],
                                [
                                    25,
                                    "0.62300"
                                ],
                                [
                                    100,
                                    "0.59500"
                                ],
                                [
                                    500,
                                    "0.53400"
                                ],
                                [
                                    1000,
                                    "0.50400"
                                ]
                            ],
                            "NOK": [
                                [
                                    1,
                                    "9.71000"
                                ],
                                [
                                    25,
                                    "8.10000"
                                ],
                                [
                                    100,
                                    "7.74000"
                                ],
                                [
                                    500,
                                    "6.94000"
                                ],
                                [
                                    1000,
                                    "6.55000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=02ff3e1&vpid=99270432",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "GB",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.farnell.com/",
                            "name": "Farnell",
                            "uid": "58989d9272cd8b5f"
                        },
                        "sku": "1878862"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 49,
                        "is_authorized": true,
                        "last_updated": "2014-05-08T14:36:01Z",
                        "moq": 500,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "0.58700"
                                ],
                                [
                                    10,
                                    "0.58700"
                                ],
                                [
                                    50,
                                    "0.58700"
                                ],
                                [
                                    100,
                                    "0.58700"
                                ],
                                [
                                    250,
                                    "0.58700"
                                ]
                            ]
                        },
                        "product_url": "http://octopart.com/click/vptrack?ak=dcaf9eef&sig=04c0aea&vpid=39227628",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.newark.com",
                            "name": "Newark",
                            "uid": "d294179ef2900153"
                        },
                        "sku": "69P8844"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": 141,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 779,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T13:16:11Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": "Cut Tape",
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "1.03000"
                                ],
                                [
                                    10,
                                    "0.92500"
                                ],
                                [
                                    50,
                                    "0.86320"
                                ],
                                [
                                    100,
                                    "0.82200"
                                ],
                                [
                                    250,
                                    "0.73980"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0f8799a&vpid=1425818",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.digikey.com",
                            "name": "Digi-Key",
                            "uid": "2c3be9310496fffc"
                        },
                        "sku": "CWD-20KRCT-ND"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": 141,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 500,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T13:16:11Z",
                        "moq": 500,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": "Tape & Reel",
                        "prices": {
                            "USD": [
                                [
                                    500,
                                    "0.73260"
                                ],
                                [
                                    2500,
                                    "0.69190"
                                ],
                                [
                                    5000,
                                    "0.61050"
                                ],
                                [
                                    12500,
                                    "0.56980"
                                ],
                                [
                                    25000,
                                    "0.52910"
                                ],
                                [
                                    50000,
                                    "0.49858"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0f6bb82&vpid=1645041",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.digikey.com",
                            "name": "Digi-Key",
                            "uid": "2c3be9310496fffc"
                        },
                        "sku": "CWD-20KRTR-ND"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": 18,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 0,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T10:49:11Z",
                        "moq": 500,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": 500,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    500,
                                    "0.51460"
                                ],
                                [
                                    1000,
                                    "0.45030"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=04ac9ec&vpid=27911986",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://avnetexpress.avnet.com",
                            "name": "Avnet Express",
                            "uid": "c1e404eefe3c1223"
                        },
                        "sku": "CW00520K00JE73"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 219,
                        "is_authorized": true,
                        "last_updated": "2014-05-16T09:03:51Z",
                        "moq": null,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "0.82000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=01b79d4&vpid=37837450",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.mouser.com",
                            "name": "Mouser",
                            "uid": "a5e060ea85e77627"
                        },
                        "sku": "71-CW00520K00JE73"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 49,
                        "is_authorized": true,
                        "last_updated": "2014-05-16T05:29:44Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "SGD": [
                                [
                                    1,
                                    "2.07000"
                                ],
                                [
                                    10,
                                    "1.92000"
                                ],
                                [
                                    50,
                                    "1.71000"
                                ],
                                [
                                    100,
                                    "1.52000"
                                ],
                                [
                                    500,
                                    "1.29000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0f9ea0a&vpid=39381602",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "CN",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.element14.com/",
                            "name": "element14 APAC",
                            "uid": "cdc808c2c94e1e0f"
                        },
                        "sku": "1878862"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 300,
                        "is_authorized": false,
                        "last_updated": "2014-05-15T21:04:20Z",
                        "moq": null,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "1.75000"
                                ],
                                [
                                    4,
                                    "1.40000"
                                ],
                                [
                                    15,
                                    "0.87500"
                                ],
                                [
                                    70,
                                    "0.52500"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0f7b41b&vpid=88861590",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.questcomp.com",
                            "name": "Quest",
                            "uid": "b29977939293615e"
                        },
                        "sku": "CW00520K00JE73"
                    }
                ],
                "uid": "6786ae9f035fb841",
                "uid_v2": 126201545379
            },
            "snippet": "Res Wirewound 20K Ohm 5% 5W \u00b130ppm/\u00b0C Ceramic Hi Temp Sil AXL Thru-Hole T/R"
        },
        {
            "__class__": "SearchResult",
            "item": {
                "__class__": "Part",
                "brand": {
                    "__class__": "Brand",
                    "homepage_url": null,
                    "name": "Dale",
                    "uid": "8abb4bb1a7bc5d7c"
                },
                "manufacturer": {
                    "__class__": "Manufacturer",
                    "homepage_url": null,
                    "name": "Dale",
                    "uid": "e7382232ce3f34ff"
                },
                "mpn": "CW01020K00JE73",
                "octopart_url": "http://octopart.com/cw01020k00je73-dale-989382",
                "offers": [
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 1000,
                        "is_authorized": true,
                        "last_updated": "2014-05-09T06:35:54Z",
                        "moq": 500,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "DKK": [
                                [
                                    500,
                                    "18.07000"
                                ],
                                [
                                    1000,
                                    "16.84000"
                                ],
                                [
                                    1500,
                                    "16.16000"
                                ],
                                [
                                    2500,
                                    "15.71000"
                                ]
                            ],
                            "EUR": [
                                [
                                    500,
                                    "2.41000"
                                ],
                                [
                                    1000,
                                    "2.25000"
                                ],
                                [
                                    1500,
                                    "2.16000"
                                ],
                                [
                                    2500,
                                    "2.10000"
                                ]
                            ],
                            "GBP": [
                                [
                                    500,
                                    "1.55800"
                                ],
                                [
                                    1000,
                                    "1.45200"
                                ],
                                [
                                    1500,
                                    "1.39300"
                                ],
                                [
                                    2500,
                                    "1.35400"
                                ]
                            ],
                            "NOK": [
                                [
                                    500,
                                    "20.25000"
                                ],
                                [
                                    1000,
                                    "18.88000"
                                ],
                                [
                                    1500,
                                    "18.11000"
                                ],
                                [
                                    2500,
                                    "17.60000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=06804db&vpid=99270880",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "GB",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.farnell.com/",
                            "name": "Farnell",
                            "uid": "58989d9272cd8b5f"
                        },
                        "sku": "2369108"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 1000,
                        "is_authorized": true,
                        "last_updated": "2014-05-08T14:36:01Z",
                        "moq": 500,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": "Tape & Reel",
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "0.92500"
                                ],
                                [
                                    500,
                                    "0.92500"
                                ],
                                [
                                    1000,
                                    "0.86200"
                                ],
                                [
                                    1500,
                                    "0.82700"
                                ],
                                [
                                    2500,
                                    "0.80400"
                                ]
                            ]
                        },
                        "product_url": "http://octopart.com/click/vptrack?ak=dcaf9eef&sig=0319a7c&vpid=93293098",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.newark.com",
                            "name": "Newark",
                            "uid": "d294179ef2900153"
                        },
                        "sku": "27K6483"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 445,
                        "is_authorized": true,
                        "last_updated": "2014-05-08T14:36:01Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "2.14000"
                                ],
                                [
                                    50,
                                    "1.85000"
                                ],
                                [
                                    100,
                                    "1.66000"
                                ],
                                [
                                    500,
                                    "1.48000"
                                ],
                                [
                                    1000,
                                    "1.18000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart.com/click/vptrack?ak=dcaf9eef&sig=095e3f3&vpid=3013233",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.newark.com",
                            "name": "Newark",
                            "uid": "d294179ef2900153"
                        },
                        "sku": "65K3627"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": 18,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 0,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T10:49:11Z",
                        "moq": 500,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": 500,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    500,
                                    "0.86550"
                                ],
                                [
                                    1000,
                                    "0.84510"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=07062cb&vpid=27647396",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://avnetexpress.avnet.com",
                            "name": "Avnet Express",
                            "uid": "c1e404eefe3c1223"
                        },
                        "sku": "CW01020K00JE73"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": 126,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 0,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T13:16:11Z",
                        "moq": 500,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": "Tape & Reel",
                        "prices": {
                            "USD": [
                                [
                                    500,
                                    "1.01150"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0129927&vpid=1972800",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.digikey.com",
                            "name": "Digi-Key",
                            "uid": "2c3be9310496fffc"
                        },
                        "sku": "CW01020K00JE73-ND"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 1000,
                        "is_authorized": true,
                        "last_updated": "2014-05-16T05:29:44Z",
                        "moq": 500,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "SGD": [
                                [
                                    500,
                                    "1.67000"
                                ],
                                [
                                    1000,
                                    "1.61000"
                                ],
                                [
                                    1500,
                                    "1.56000"
                                ],
                                [
                                    2500,
                                    "1.51000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0ba1b7f&vpid=99160600",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "CN",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.element14.com/",
                            "name": "element14 APAC",
                            "uid": "cdc808c2c94e1e0f"
                        },
                        "sku": "2369108"
                    }
                ],
                "uid": "25b5ecb01815fa72",
                "uid_v2": 98938248273
            },
            "snippet": "Res Wirewound 20K Ohm 5% 10W \u00b130ppm/\u00b0C Ceramic Hi Temp Sil AXL Thru-Hole T/R"
        },
        {
            "__class__": "SearchResult",
            "item": {
                "__class__": "Part",
                "brand": {
                    "__class__": "Brand",
                    "homepage_url": "http://www.ohmite.com/",
                    "name": "Ohmite",
                    "uid": "574996437b3e808e"
                },
                "manufacturer": {
                    "__class__": "Manufacturer",
                    "homepage_url": "http://www.ohmite.com/",
                    "name": "Ohmite",
                    "uid": "5da998a375de8e6e"
                },
                "mpn": "B12J20K",
                "octopart_url": "http://octopart.com/b12j20k-ohmite-22603",
                "offers": [
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 0,
                        "is_authorized": true,
                        "last_updated": "2014-05-08T14:36:01Z",
                        "moq": 50,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "4.90000"
                                ],
                                [
                                    25,
                                    "4.68000"
                                ],
                                [
                                    50,
                                    "4.41000"
                                ],
                                [
                                    100,
                                    "4.06000"
                                ],
                                [
                                    250,
                                    "3.81000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart.com/click/vptrack?ak=dcaf9eef&sig=05f9f00&vpid=2869132",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.newark.com",
                            "name": "Newark",
                            "uid": "d294179ef2900153"
                        },
                        "sku": "02F1843"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": 56,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 0,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T13:16:11Z",
                        "moq": 50,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": "Bulk",
                        "prices": {
                            "USD": [
                                [
                                    50,
                                    "3.75000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=03669fa&vpid=1548865",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.digikey.com",
                            "name": "Digi-Key",
                            "uid": "2c3be9310496fffc"
                        },
                        "sku": "B12J20K-ND"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": 10,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 1,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T11:18:48Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": 0,
                        "order_multiple": null,
                        "packaging": "Bulk",
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "5.61000"
                                ],
                                [
                                    50,
                                    "5.34000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0a04d26&vpid=8640086",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.onlinecomponents.com",
                            "name": "Onlinecomponents.com",
                            "uid": "e3fd26f7c3e6303a"
                        },
                        "sku": "B12J20K"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": 70,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 0,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T09:48:21Z",
                        "moq": 50,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    50,
                                    "4.16000"
                                ],
                                [
                                    100,
                                    "3.45000"
                                ],
                                [
                                    225,
                                    "3.27000"
                                ],
                                [
                                    475,
                                    "2.89000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0230c20&vpid=65735169",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.sager.com/",
                            "name": "Sager",
                            "uid": "8ec14bcb9b775d06"
                        },
                        "sku": "B12J20K"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 32,
                        "is_authorized": false,
                        "last_updated": "2014-05-15T21:04:20Z",
                        "moq": null,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "8.55000"
                                ],
                                [
                                    2,
                                    "5.70000"
                                ],
                                [
                                    5,
                                    "4.27500"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0d3f412&vpid=30128088",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.questcomp.com",
                            "name": "Quest",
                            "uid": "b29977939293615e"
                        },
                        "sku": "B12J20K"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 13,
                        "is_authorized": false,
                        "last_updated": "2014-05-15T10:07:45Z",
                        "moq": null,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "2.80800"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0d930ee&vpid=2163680",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.gerberelec.com",
                            "name": "Gerber",
                            "uid": "e145244fc14a3282"
                        },
                        "sku": "B12J20K"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 6,
                        "is_authorized": false,
                        "last_updated": "2014-05-15T16:18:39Z",
                        "moq": null,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "3.10000"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0eabad9&vpid=44165115",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://rcfreelance.com/",
                            "name": "Freelance Electronics",
                            "uid": "029cc79618fcd15b"
                        },
                        "sku": "B12J20K"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 1,
                        "is_authorized": false,
                        "last_updated": "2014-05-12T14:58:53Z",
                        "moq": 50,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": 1,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "4.69650"
                                ],
                                [
                                    50,
                                    "3.75720"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0499c58&vpid=107907633",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "GB",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.tencell.com",
                            "name": "Tencell",
                            "uid": "964d5347f74c458a"
                        },
                        "sku": "B12J20K"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 17,
                        "is_authorized": false,
                        "last_updated": "2014-05-15T19:35:29Z",
                        "moq": null,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {},
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=04c6327&vpid=64683225",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": false,
                            "homepage_url": "http://www.harrykrantz.com",
                            "name": "Harry Krantz",
                            "uid": "30cdf5c7272fe30a"
                        },
                        "sku": "B12J20K"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 148,
                        "is_authorized": false,
                        "last_updated": "2013-11-04T19:01:16Z",
                        "moq": null,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {},
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=05f8ff5&vpid=41625597",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": false,
                            "homepage_url": "http://select-technology.net/",
                            "name": "Select Technology",
                            "uid": "80c745cd85fe5300"
                        },
                        "sku": "B12J20K"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": null,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 347,
                        "is_authorized": false,
                        "last_updated": "2014-05-06T17:40:38Z",
                        "moq": null,
                        "octopart_rfq_url": "http://octopart.com/rfq/generate?ppid=22603&vpid=10254854",
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": null,
                        "prices": {},
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=06653cb&vpid=10254854",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": false,
                            "homepage_url": "http://www.expediters.com/",
                            "name": "Electronic Expediters",
                            "uid": "a83a6d3088d87bfd"
                        },
                        "sku": "B12J20K"
                    }
                ],
                "uid": "95c25cc8e8ef4a05",
                "uid_v2": 2260362017
            },
            "snippet": "Brown Devil Vitreous Enamel Power Resistor - 20KOhms 12W 5%"
        },
        {
            "__class__": "SearchResult",
            "item": {
                "__class__": "Part",
                "brand": {
                    "__class__": "Brand",
                    "homepage_url": null,
                    "name": "Dale",
                    "uid": "8abb4bb1a7bc5d7c"
                },
                "manufacturer": {
                    "__class__": "Manufacturer",
                    "homepage_url": null,
                    "name": "Dale",
                    "uid": "e7382232ce3f34ff"
                },
                "mpn": "CW01020K00JS73",
                "octopart_url": "http://octopart.com/cw01020k00js73-dale-1192224",
                "offers": [
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": 18,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 0,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T10:49:11Z",
                        "moq": 500,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": 500,
                        "packaging": null,
                        "prices": {
                            "USD": [
                                [
                                    500,
                                    "0.95180"
                                ],
                                [
                                    1000,
                                    "0.92980"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0748408&vpid=27939536",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://avnetexpress.avnet.com",
                            "name": "Avnet Express",
                            "uid": "c1e404eefe3c1223"
                        },
                        "sku": "CW01020K00JS73"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": 126,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 0,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T13:16:11Z",
                        "moq": 500,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": "Tape & Reel",
                        "prices": {
                            "USD": [
                                [
                                    500,
                                    "1.14480"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0a509c3&vpid=1151153",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.digikey.com",
                            "name": "Digi-Key",
                            "uid": "2c3be9310496fffc"
                        },
                        "sku": "CWE-20KTR-ND"
                    },
                    {
                        "__class__": "PartOffer",
                        "factory_lead_days": 126,
                        "factory_order_multiple": null,
                        "in_stock_quantity": 0,
                        "is_authorized": true,
                        "last_updated": "2014-05-15T13:16:11Z",
                        "moq": 1,
                        "octopart_rfq_url": null,
                        "on_order_eta": null,
                        "on_order_quantity": null,
                        "order_multiple": null,
                        "packaging": "Cut Tape",
                        "prices": {
                            "USD": [
                                [
                                    1,
                                    "1.39000"
                                ],
                                [
                                    10,
                                    "1.24700"
                                ],
                                [
                                    50,
                                    "1.16340"
                                ],
                                [
                                    100,
                                    "1.10800"
                                ],
                                [
                                    250,
                                    "0.99720"
                                ]
                            ]
                        },
                        "product_url": "http://octopart-clicks.com/click/vptrack?ak=dcaf9eef&sig=0d4d690&vpid=1142174",
                        "seller": {
                            "__class__": "Seller",
                            "display_flag": "US",
                            "has_ecommerce": true,
                            "homepage_url": "http://www.digikey.com",
                            "name": "Digi-Key",
                            "uid": "2c3be9310496fffc"
                        },
                        "sku": "CWE-20KCT-ND"
                    }
                ],
                "uid": "c9fb00e3ddbd163c",
                "uid_v2": 119222408530
            },
            "snippet": "Res Wirewound 20K Ohm 5% 10W \u00b130ppm/\u00b0C Ceramic Hi Temp Sil AXL Thru-Hole T/R"
        }
    ],
    "spec_metadata": {
        "mounting_style": {
            "__class__": "SpecMetadata",
            "datatype": "string",
            "key": "mounting_style",
            "name": "Mounting Style",
            "unit": null
        },
        "pin_count": {
            "__class__": "SpecMetadata",
            "datatype": "integer",
            "key": "pin_count",
            "name": "Number of Pins",
            "unit": null
        },
        "resistance": {
            "__class__": "SpecMetadata",
            "datatype": "decimal",
            "key": "resistance",
            "name": "Resistance",
            "unit": {
                "__class__": "UnitOfMeasurement",
                "name": "ohms",
                "symbol": "\u03a9"
            }
        },
        "resistance_tolerance": {
            "__class__": "SpecMetadata",
            "datatype": "string",
            "key": "resistance_tolerance",
            "name": "Resistance Tolerance",
            "unit": null
        }
    },
    "stats_results": {}
});
