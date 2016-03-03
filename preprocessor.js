'use strict';
var ReactTools = require('react-tools');
var babelJest = require("babel-jest");

module.exports = {
  process: function(src, filename) {
    return babelJest.process(src, filename)
      .replace(/^require.*\.less.*;$/gm, '');
  }
};
// module.exports = {
//
//   process: function(src, file) {
//     if (file.match(/node_modules/)) {
//       return src;
//     } else if (file.match(/css/)) {
//       return '';
//     }
//
//     var transformed = ReactTools.transform(src, { harmony: true });
//
//     return transformed;
//   }
//
// };
