var React = require("react");

var Toolbar = require("material-ui/lib/toolbar/toolbar");
var ToolbarGroup = require("material-ui/lib/toolbar/toolbar-group");
var ToolbarTitle = require("material-ui/lib/toolbar/toolbar-title");
var FlatButton = require("material-ui/lib/flat-button");
var FontIcon = require("material-ui/lib/font-icon");
var FloatingActionButton = require("material-ui/lib/floating-action-button");

var MainPage = React.createClass({
    getInitialState: function() {
        return {message: "hello world",muiTheme:this.context.muiTheme };
    },
    getChildContext: function() {
        return {muiTheme: this.state.muiTheme};
    },
    contextTypes: {
        muiTheme: React.PropTypes.object
    },
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },
    render: function(){
        return <div>
            <div className="header-toolbox">
                <Toolbar style={{padding: "0 20px"}}>
                    <ToolbarGroup firstChild={true} float="left" style={{margin: "0px" }}>  
                        <ToolbarTitle text="Classify History" style={{fontFamily: "cinzel",margin: 0}}/>
                        <FlatButton 
                            label="My Projects"
                            style={this.state.muiTheme.navButton}
                        />
                        <FlatButton 
                            label="Images"
                            style={this.state.muiTheme.navButton}
                        />
                    </ToolbarGroup>
                    <ToolbarGroup float="right">
                        <FlatButton 
                            label="Save"
                            style={this.state.muiTheme.navButton}
                        />
                        <FlatButton 
                            label="login"
                            style={this.state.muiTheme.navButton}
                        />
                    </ToolbarGroup>
                </Toolbar>
                <Toolbar>
                    <ToolbarGroup float="left">
                        <FlatButton 
                            label="Edit"
                            icon={<FontIcon className="material-icons">edit</FontIcon>}
                            style={this.state.muiTheme.navButton}
                        />
                        <FlatButton 
                            label="Category"
                            icon={<FontIcon className="material-icons">edit</FontIcon>}
                            style={this.state.muiTheme.navButton}
                        />
                    </ToolbarGroup>
                </Toolbar>
                <div className="lightbox">
                    <img src="images/placeholder.png" />
                    <img src="images/placeholder.png" />
                    <img src="images/placeholder.png" />
                    <img src="images/placeholder.png" />
                    <img src="images/placeholder.png" />
                    <img src="images/placeholder.png" />
                </div>
            </div>
            <div className="canvas">
                <img src="images/placeholder.png" />
            </div>
            <div>
                <FloatingActionButton>
                    <FontIcon className="material-icons">cloud_download</FontIcon>
                </FloatingActionButton>
                <div className="dock" style={{width: "100%"}}>
                    <Toolbar style={ {position: "relative",margin: "auto", textAlign:"center", backgroundColor: "transparent"}}>
                        <FlatButton label="" className="large-button" icon={<FontIcon className="material-icons">rotate_left</FontIcon>} />
                        <FlatButton label="" className="large-button" icon={<FontIcon className="material-icons">rotate_right</FontIcon>} />
                        <FlatButton label="" className="large-button" icon={<FontIcon className="material-icons">zoom_in</FontIcon>} />
                        <FlatButton label="" className="large-button" icon={<FontIcon className="material-icons">zoom_out</FontIcon>}/>
                        <FlatButton label="" className="large-button" icon={<FontIcon className="material-icons">photo_size_select_small</FontIcon>}/>
                        <FlatButton label="" className="large-button" icon={<FontIcon className="material-icons">rotate_right</FontIcon>}/>
                        <FlatButton label="" className="large-button" icon={<FontIcon className="material-icons">fullscreen</FontIcon>}/>
                        <FlatButton label="" className="large-button" icon={<FontIcon className="material-icons">screen_rotation</FontIcon>}/>
                    </Toolbar>
                </div>
            </div>
        </div>
    }
});

module.exports = MainPage;