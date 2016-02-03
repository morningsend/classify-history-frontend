var React = require("react");

var FlatButton = require("material-ui/lib/flat-button");
var RaisedButton = require("material-ui/lib/raised-button");
var Toolbar = require('material-ui/lib/toolbar/toolbar');
var ToolbarGroup = require('material-ui/lib/toolbar/toolbar-group');
var ToolbarSeparator = require('material-ui/lib/toolbar/toolbar-separator');
var ToolbarTitle = require('material-ui/lib/toolbar/toolbar-title');
var LeftNav = require("material-ui/lib/left-nav");

var Divider = require("material-ui/lib/divider");
var List = require("material-ui/lib/lists/list");
var ListItem = require("material-ui/lib/lists/list-item");

var FontIcon = require('material-ui/lib/font-icon');
var Dashboard = require("./Dashboard");
var TopToolbar = React.createClass({
    render: function() {
        
        var style ={
                backgroundColor: "rgb(77, 198, 232)",
                height: "56px",
                width: "100%",
                padding: "0px 24px",
                zIndex: "3000",
                position: "fixed"
        };
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
        </Toolbar>;
    }
});

var Sidebar = React.createClass({
    getInitialState: function() {
        return {
            menuItemSeleted: -1
        };
    },
    fontIconStyle: {
        fontSize: "1.4em",
        marginRight: "2em"
    },
    render: function(){
        var style={
            overflow: "hidden-y"
        };
        var projectIcon = this._createIcon("assessment");
        var albumIcon = this._createIcon("photo");
        return <div style={style}>
            <LeftNav width={255} docked={true}>
                <div>#</div>
                <div>#</div>
                <List>
                    <ListItem primaryText="Projects Explorer" leftIcon={projectIcon} />
                    <ListItem primaryText="Albums Viewer" leftIcon={albumIcon} />
                </List>
                <Divider />
                <h3>Tools</h3>
                <List>
                    <ListItem primaryText="Import" />
                    <ListItem primaryText="Export" />
                </List>
            </LeftNav>
        </div>;
    },
    _createIcon: function(alias){
        return <FontIcon className="material-icons md-dark" style={this.fontIconStyle}>{alias}</FontIcon>;
    }
});

var Content = React.createClass({
    style : {
        margin: "56px 0 0 255px",
        padding: "1em",
        position: "absolute",
        width: "100%",
        height: "100%"
    },
    render: function(){
        return <div style={ this.style }>{this.props.children}</div>;
    } 
});

var DashboardPage = React.createClass({
    render : function(){
        return <div>
            <TopToolbar />
            <Sidebar />
            <Content>
                <Dashboard />
            </Content>
        </div>;
    }
});

module.exports = DashboardPage;