var webpackConfig=require('./webpack.config');


module.exports= function(config){
    config.set({
        basePath: './src/app',

        files: [
            '../../dist/app.js',
            '../../node_modules/angular-mocks/angular-mocks.js',
            '**/*.spec.js',
            '**/*.html'
        ],


        frameworks:['jquery-3.0.0','jasmine'],

        browsers:['Chrome'],

        preprocessors: {
            '../../dist/app.js':['webpack'],
            '**/*.spec.js': ['babel'],
            '**/*.html':['ng-html2js']
        },


        webpack: webpackConfig,

        webpackMiddleware: {
            noInfo: true
        },


    });
};