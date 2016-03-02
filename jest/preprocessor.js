var babelJest = require('babel-jest');
var webpackAlias = require('jest-webpack-alias');
var ReactTools = require('react-tools');
module.exports = {
  process: function(src, filename) {
    //
    // return ReactTools.transform((src, filename));

    if (filename.indexOf('node_modules') === -1) {
      src = babelJest.process(src, filename);
      src = webpackAlias.process(src, filename);
    }
    return(src, {harmony: true});
  }
};
