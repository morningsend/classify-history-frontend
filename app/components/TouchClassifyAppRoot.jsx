var React = require("react");
var ReactDOM = require("react-dom");

var ReactRouter = require("react-router");

var IndexRoute = ReactRouter.IndexRoute;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var Router = ReactRouter.Router;
var browserHistory = ReactRouter.browserHistory;

var AppBar = require("material-ui/lib/app-bar");

var SinglePage = require("./SinglePageContainer");
var Login = require("./Login");
var DashboardPage = require("./DashboardPage");
var Draggable = require("./Draggable");

require('../less/style');

var TouchClassifyAppRoot = React.createClass({
    getInitialState: function() {
        return {
            loggedIn: false
        };
    },
    render : function() {
        return (<div >
            <SinglePage>
                {this.state.loggedIn? <DashboardPage></DashboardPage> : <Draggable><div><Login success={this.handleLogginSuccess} /></div></Draggable> }
            </SinglePage> 
        </div>);
    },
    handleLogginSuccess: function(event) {
        this.setState({loggedIn: true});
    }
});

module.exports = TouchClassifyAppRoot;