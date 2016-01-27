var React = require("react");

var LoginDialog = require("./LoginDialog.jsx");
var RaisedButton = require("material-ui/lib/raised-button");
var HomePage = require("./HomePage.jsx");


var AppContainer = React.createClass({
    displayName: "AppContainer",
    getInitialState: function() {
        return {userLoggedIn: false, showLoginDialog: false};
    },
    render : function(){
        var loggedInCallback = this.userDidLogIn;
        
        var WelcomeMessage = <div className="welcome-message-container">
            <h1>Hello, Welcome to Image Classify</h1>
            <p>Developed by HexHack</p>
            <RaisedButton onClick={this.showLoginDialog} label="Log in with username/password" />
            {this.state.showLoginDialog ? <LoginDialog userLoggedIn={this.userDidLogIn} /> : <div></div>}
        </div>;
        /*return <div>{ this.state.userLoggedIn ? 
            <HomePage /> : 
            WelcomeMessage}</div>;*/
        return <HomePage />;
        
    },
    userDidLogIn : function() {
        this.setState({userLoggedIn: true, showLoginDialog: false});
    },
    showLoginDialog : function() {
        this.setState({
            showLoginDialog: !this.state.userLoggedIn,
        });
    }
});

module.exports = AppContainer;