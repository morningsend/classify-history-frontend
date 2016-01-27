var React = require("react");
var ReactDOM = require("react-dom");
var App = require("./components/AppContainer.jsx");

//require the style sheet. Webpack will package this.
require('./less/style.less');


ReactDOM.render(<App />, document.querySelector('#wrapper'));