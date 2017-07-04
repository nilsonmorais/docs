const webpackConfig = require('./webpack.config');

module.exports = function(grunt) {
    grunt.initConfig({
        clean: ['dist/'],
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['*.html'],
                        dest: 'dist/'
                    },

                ],
            },
        },
        webpack: {
            prod: webpackConfig,
            dev: webpackConfig
        },
        watch: {
            scripts: {
                files: 'src/*.js',
                tasks: ['webpack'],
                options: {
                    interrupt: true,
                },
            },
            html: {
                files: 'src/*.html',
                tasks: ['copy'],
                options: {
                    interrupt: true,
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask('default', ['clean', 'copy', 'webpack']);
};