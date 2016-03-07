var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome', 'Firefox' ], //run in Chrome
    singleRun: true, //just run once by default
    frameworks: ['jasmine'], //use the jest test framework
    files: [
      'tests.webpack.js' //just load this file
    ],
    preprocessors: {
      'tests.webpack.js':  ['webpack', 'sourcemap', 'eslint'] //preprocess with webpack and our sourcemap loader
    },
    reporters: [ 'dots' ], //report results in this format
    webpack: { //kind of a copy of your webpack config
      //devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react'],
            }
        }
        ]
      }
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  });
};
