var React = require("react");
var ReactDOM = require("react-dom");

var TouchClassifyAppRoot = require("./components/TouchClassifyAppRoot.jsx");
var Router = require("react-router");
//require the style sheet. Webpack will package this.



ReactDOM.render(<TouchClassifyAppRoot />, document.querySelector("#wrapper"));