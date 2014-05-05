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
        jasmine: {
            taskName: {
                src: 'js/**/*.js',
                options: {
                    specs: 'spec/**/*.js',
                    template: require('grunt-template-jasmine-requirejs'),
                    templateOptions: {
                        requireConfigFile: ['js/main.js']
                    }
                }
            }
        },
        jslint: {
            client: {
                src: ['Gruntfile.js', 'js/**/*.js', 'spec/**/*.js'],
                directives: {
                    browser: true,
                    devel: true,
                    nomen: true,
                    predef: ['requirejs', 'define', 'require', 'describe', 'beforeEach', 'it', 'expect', 'afterEach', 'runs', 'waitsFor']
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

    // Default task.
    grunt.registerTask('default', []);

};
