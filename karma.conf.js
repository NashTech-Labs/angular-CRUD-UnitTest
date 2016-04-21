// Karma configuration
// Generated on Mon Apr 18 2016 13:13:36 GMT+0530 (IST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'assets/libs/0angular.js',
        'assets/libs/1angular-ui-router.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'app/rbApp.module.js',
        'app/rbApp.route.js',
        'test/add.test.ctrl.js',
        'app/component/add/add.factory.js',
        'app/component/add/add.ctrl.js',
        'app/component/home/home.ctrl.js',
        'app/component/delete/delete.ctrl.js',
        'app/component/edit/edit.ctrl.js'


    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'app/component/add/add.ctrl.js':'coverage',
        'app/component/delete/delete.ctrl.js':'coverage',
        'app/component/edit/edit.ctrl.js':'coverage',
        'app/component/home/home.ctrl.js':'coverage'


    },



    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage'],

      coverageReporter: {
          type : 'html',
          dir : 'coverage/'
      },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],



    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
