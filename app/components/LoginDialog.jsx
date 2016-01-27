var React = require("react");

var $ = require("jquery");
var md = require("md5");
var RaisedButton = require("material-ui/lib/raised-button");
var TextField = require("material-ui/lib/text-field");
var Dialog = require("material-ui/lib/dialog");

var LoginDialog = React.createClass({
    displayName: "Login Form",
    getInitialState : function() {
        return {username: "", password:"", logInButtonDisabled: true, logInButtonText: "Login", logInButtonText: "Log In", status: "", open: true };
    },
    render: function() {
        var actions=[
            <RaisedButton label="Login" onClick={this.loginHandlerMock} primary={true} disabled={this.state.logInButtonDisabled}/>,
            <RaisedButton label="Cancel" onClick={this.cancel} />
        ];
        
        
        return (<Dialog modal={true} actions={actions} className={'loginform-container'} open={this.state.open}>
            <TextField floatingLabelText="Username" onChange={this.handleUsernameChange} />
            <TextField floatingLabelText="Password" type="password" onChange={this.handlePasswordChange} />
            <RaisedButton onClick={this.loginHandlerMock} disabled={this.state.logInButtonDisabled} label={this.state.logInButtonText} />
            <p>{this.state.status? this.state.status: ""}</p>
        </Dialog>)
    },
    handleUsernameChange : function(event){
        var username = {username: event.target.value};
        this.setState(username);
        this.updateLoginButtonState();
    },
    handlePasswordChange: function(event) {
        var password = {password: event.target.value};
        this.setState(password);
        this.updateLoginButtonState();
    },
    updateLoginButtonState: function() {
        if(this.state.username.trim() && this.state.password.trim()){
            this.setState({logInButtonDisabled: false});
        }else {
            this.setState({logInButtonDisabled: true});
        }
    },
    loginHandler : function(event) {
        this.setState({logInButtonDisabled: true, logInButtonText:"Logging you in" });
        
        var userCredentials = {
            username: this.state.username,
            passhash: md(this.state.password),
        };
        var newState = {
            status: "",
            logInButtonText: "Log In",
            logInButtonDisabled: false,
        }
        var request = $.post(this.props.url, userCredentials);
        
        request.done(function(data){
                if(data.status=="success"){
                    newState.status="successfully logged in";
                }else {
                    newState.status="wrong username/password combination";
                }
                this.setState(newState);
                this.props.loggedIn();
            })
            .fail(function(){
               newState.status="error connecting to server";
               this.setState(newState);
            }).always(function(){
                this.setState({open: false});
            });
    },
    loginHandlerMock: function(event) {
        this.setState({
            status: "Successful!",
            logInButtonText: "Logged In",
            logInButtonDisabled: true,
        });
        this.props.userLoggedIn();
    },
    cancel: function(event) {
        this.setState({open: false});
    },
    open: function(){
        this.setState({open: true});
    }
    
});
module.exports = LoginDialog;