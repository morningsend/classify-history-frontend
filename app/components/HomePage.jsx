var React=require("react");
var AppBar = require("material-ui/lib/app-bar");
var LeftNav = require("material-ui/lib/left-nav");
var Paper = require("material-ui/lib/paper");
var Toolbar = require("material-ui/lib/toolbar/toolbar");
var ToolbarTitle = require("material-ui/lib/toolbar/toolbar-title");
var ToolbarGroup = require("material-ui/lib/toolbar/toolbar-group");
var FlatButton = require("material-ui/lib/flat-button");
var HomePage = React.createClass({
    
    
    
   render: function() {
       
       var mainStyle = { paddingLeft : "256px" };
       
       
       return (<div className="page-wrapper">
        <Paper zDepth={2} rounded={false} className="sidebar-wrapper">
            <LeftNav open={true} >
                <h2>Username</h2>
                <p>Welcome back</p>
            </LeftNav>
        </Paper>
        <div style={mainStyle}>
            <Paper zDepth={1} rounded={false}>
                <Toolbar>
                    <ToolbarGroup float="left">
                        <ToolbarTitle text="Home - Dashboard" />
                    </ToolbarGroup>
                    <ToolbarGroup float="right">
                        <FlatButton label="Settings" />
                        <FlatButton label="Log out" />
                    </ToolbarGroup>
                </Toolbar>
            </Paper>
        </div> 
        </div>);
   } 
});

module.exports = HomePage;