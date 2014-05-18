/*global module:false*/
module.exports = function (grunt) {
    "use strict";

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: ['lib/<%= pkg.name %>.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            lib_test: {
                files: '<%= jshint.lib_test.src %>',
                tasks: ['jshint:lib_test', 'qunit']
            }
        },
        sync: {
            main: {
                src: ['**', '!Gruntfile.js', '!*.json'],
                dest: '../cordova-fyr/www/',
                verbose: true
            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: "js/",
                    name: "main",
                    paths: {
                        jquery: "../bower_components/jquery/src/jquery"
                    },
                    optimize: "none",
                    out: "js/requirejs-build/app-build.js"
                }
            }
        },
        jasmine: { // v 0.5.3 needed for requirejs template plugin: from jasmine 1.0.0 to 1.3.1.
            // #bug: resistor.view uses jasmine-jquery: a strange race-condition makes it hazardous to launch alongside other specs
            logic: {
                src: 'js/**/*.js',
                options: {
                    specs: ['spec/resistor.model.spec.js', 'spec/resistor.controller.spec.js'],
                    helpers: ['spec/helpers/*.js'],
                    template: require('grunt-template-jasmine-requirejs'),
                    templateOptions: {
                        requireConfigFile: ['js/main.js']
                    },
                    keepRunner: true
                }
            },
            view: {
                src: 'js/**/*.js',
                options: {
                    specs: 'spec/resistor.view.spec.js',
                    vendor: ['bower_components/jquery/jquery.js', 'bower_components/jasmine-jquery/lib/jasmine-jquery.js'],
                    helpers: ['spec/helpers/*.js'],
                    template: require('grunt-template-jasmine-requirejs'),
                    templateOptions: {
                        requireConfigFile: ['js/main.js'],
                        requireConfig: {
                            paths: {
                                "text": "../bower_components/text/text"
                            }
                        }
                    },
                    keepRunner: true
                }
            }
        },
        jslint: {
            client: {
                src: ['Gruntfile.js', 'js/**/*.js', 'spec/**/*.js'],
                exclude: ['spec/helpers/jasmine-jquery.js'],
                directives: {
                    browser: true, // standard browser globales allowed
                    devel: true, // browser globals for debugging allowed (console, alert...)
                    stupid: true, // allow use of methods finishing by 'Sync'
                    nomen: true, // start variable names with '_' allowed
                    predef: ['requirejs', 'define', 'require', // requirejs
                            'describe', 'beforeEach', 'it', 'expect', 'afterEach', 'runs', 'waitsFor', 'spyOn', 'customMatchers', 'jasmine', //jasmine
                            'setFixtures', '$'] //jasmine-jquery, jquery
                }
            }
        },
        yuidoc: {
            compile: {
                name: '<%= pkg.name %>',
                description: '<%= pkg.description %>',
                version: '<%= pkg.version %>',
                url: '<%= pkg.homepage %>',
                options: {
                    paths: 'js',
                    //themedir: 'path/to/custom/theme/',
                    outdir: 'apidoc'
                }
            }
        },
        autoprefixer: {
            index: {
                src: "css/index.css"
            }
        }
    });

    // These plugins provide necessary tasks.
    //grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sync');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-jslint');

    grunt.loadNpmTasks('grunt-contrib-yuidoc');
    grunt.loadNpmTasks('grunt-autoprefixer');

    // Default task.
    grunt.registerTask('default', []);
};
