var React = require("react");
var ReactDOM = require("react-dom");

var TouchClassifyAppRoot = require("./components/TouchClassifyAppRoot");

//require the style sheet. Webpack will package this.



ReactDOM.render(<TouchClassifyAppRoot />, document.querySelector("#wrapper"));