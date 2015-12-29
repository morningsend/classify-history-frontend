var React = require("react");
var ReactDOM = require("react-dom");
var FilterList = require("./filterlist")
var ImageIcon = require("./ImageIcon");
var Dialog = require("./Dialog");
var LoginDialog = require("./LoginDialog");

var App = React.createClass({
	render: function() {

		return (<div>
			<FilterList />
			<ImageIcon url="assets/images/image1.jpg" width="100" height="100" />
			<Dialog><h1>Hello world</h1><h2>React is cool</h2></Dialog>
			<LoginDialog />
		</div>);
	},

});

module.exports = App;