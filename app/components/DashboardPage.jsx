var React = require("react");

var FlatButton = require("material-ui/lib/flat-button");
var RaisedButton = require("material-ui/lib/raised-button");
var Toolbar = require('material-ui/lib/toolbar/toolbar');
var ToolbarGroup = require('material-ui/lib/toolbar/toolbar-group');
var ToolbarSeparator = require('material-ui/lib/toolbar/toolbar-separator');
var ToolbarTitle = require('material-ui/lib/toolbar/toolbar-title');


var TopToolbar = React.createClass({
    render: function() {
        
        var style ={
                backgroundColor: "rgb(77, 198, 232)",
                height: "56px",
                width: "100%",
                padding: "0px 24px"
        }
        return <Toolbar style={style}>
            <ToolbarGroup><ToolbarTitle text="Touch Classify - Home" /></ToolbarGroup>
            <ToolbarSeparator />
            <ToolbarGroup >
                <FlatButton label="projects" />
                <FlatButton label="Keywords" />
            </ToolbarGroup>
            <ToolbarGroup float="right">
                <FlatButton label="Settings" />
                <FlatButton label="Log out" />
            </ToolbarGroup>
        </Toolbar>
    }
});

var DashboardPage = React.createClass({
    render : function(){
        return <div>
            <TopToolbar />
        </div>;
    }
});

module.exports = DashboardPage;