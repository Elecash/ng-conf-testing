module.exports = function(config) {
    config.set({

        basePath: '.',

        frameworks: ['jasmine'],

        files: [
            // System.js for module loading
            'node_modules/systemjs/dist/system-polyfills.js',
            'node_modules/systemjs/dist/system.src.js',

            // Polyfills.
            'node_modules/es6-shim/es6-shim.js',
            'node_modules/angular2/bundles/angular2-polyfills.js',

            // Zone.js dependencies
            // Note - do not include zone.js itself here, it is already
            // included in angular2-polyfills
            'node_modules/zone.js/dist/long-stack-trace-zone.js',
            'node_modules/zone.js/dist/jasmine-patch.js',
            'node_modules/zone.js/dist/async-test.js',
            'node_modules/zone.js/dist/fake-async-test.js',

            // RxJs.
            'node_modules/rxjs/bundles/Rx.js',

            // Angular 2 itself and the testing library.
            'node_modules/angular2/bundles/angular2.js',
            'node_modules/angular2/bundles/http.js',
            'node_modules/angular2/bundles/testing.dev.js',

            {pattern: 'karma-test-shim.js', included: true, watched: true},

            // paths loaded via module imports
            {pattern: 'dist/**/*.js', included: false, watched: true},

            // paths to support debugging with source maps in dev tools
            {pattern: 'src/**/*.ts', included: false, watched: false},
            {pattern: 'dist/**/*.js.map', included: false, watched: false}
        ],

        // proxied base paths
        proxies: {
            // required for component assests fetched by Angular's compiler
            '/src/': '/base/src/'
        },

        port: 9876,

        logLevel: config.LOG_INFO,

        colors: true,

        autoWatch: true,

        browsers: ['Chrome'],

        // Karma plugins loaded
        plugins: [
            'karma-jasmine',
            'karma-coverage',
            'karma-chrome-launcher'
        ],

        // Coverage reporter generates the coverage
        reporters: ['progress', 'dots', 'coverage'],

        // Source files that you wanna generate coverage for.
        // Do not include tests or libraries (these files will be instrumented by Istanbul)
        preprocessors: {
            'dist/**/!(*spec).js': ['coverage']
        },

        coverageReporter: {
            reporters:[
                {type: 'json', subdir: '.', file: 'coverage-final.json'}
            ]
        },

        singleRun: true
    })
};
