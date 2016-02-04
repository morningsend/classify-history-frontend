var React = require("react");

var FlatButton = require("material-ui/lib/flat-button");
var RaisedButton = require("material-ui/lib/raised-button");
var Toolbar = require('material-ui/lib/toolbar/toolbar');
var ToolbarGroup = require('material-ui/lib/toolbar/toolbar-group');
var ToolbarSeparator = require('material-ui/lib/toolbar/toolbar-separator');
var ToolbarTitle = require('material-ui/lib/toolbar/toolbar-title');
var LeftNav = require("material-ui/lib/left-nav");

var Divider = require("material-ui/lib/divider");
var Menu = require('material-ui/lib/menus/menu');
var MenuItem = require('material-ui/lib/menus/menu-item');

var Dashboard = require("./Dashboard");
var ImageGrid = require("./ResponsiveImageGrid");

var MaterialIconFactory = require("./MaterialIconFactory");

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
        return <div>
            <LeftNav width={255} docked={true}>
                <div>#</div>
                <div>#</div>
                {this.props.children}
            </LeftNav>
        </div>;
    }
    
});
var SidebarMenu = React.createClass({

    render: function() {
        return <div>{this.props.children}</div>;
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
    iconFactory: MaterialIconFactory(),
    getInitialState: function() {
        return { displayPage: 1};
    },
    render : function(){
        var projectIcon = this.iconFactory.createIcon("assessment");
        var albumIcon = this.iconFactory.createIcon("theaters");
        var dashboardIcon = this.iconFactory.createIcon("track_changes");
        return <div>
            <TopToolbar />
            <Sidebar>
                <Menu onItemTouchTap={this.handleSidebarMenuChoice}>
                    <MenuItem key={"dashboard-menu-item"} primaryText="Dashboard" leftIcon={dashboardIcon} />
                    <MenuItem key={"project-menu-item"} primaryText="Projects Explorer" leftIcon={projectIcon} />
                    <MenuItem key={"album-menu-item"} primaryText="Albums Viewer" leftIcon={albumIcon} />
                <Divider />
                <h3>Tools</h3>
                    <MenuItem primaryText="Import" />
                    <MenuItem primaryText="Export" />
                </Menu>
            </Sidebar>
            <Content>
                <Dashboard pageId={1} />
            </Content>
        </div>;
    },
    handleSidebarMenuChoice: function(event){
        this.setState({displayPage: pageId});
    }
});

module.exports = DashboardPage;