var React=require("react");

var Card = require("material-ui/lib/card/card");
var CardTitle =  require("material-ui/lib/card/card-title");
var CardActions = require("material-ui/lib/card/card-actions");
var CardText = require("material-ui/lib/card/card-text");
var RaisedButton = require("material-ui/lib/raised-button");
var FlatButton = require("material-ui/lib/flat-button");
var TextField = require("material-ui/lib/text-field");

var style = require("../less/login.less");

console.log(style);

var Login = React.createClass({
    initialState: {
        username: "",
        password: "",
        waitingForResponse: false  
    },
    render: function(){
        var loginLabel = this.state.waitingForResponse ? "" : "Log in";
        return <Card className="tc-login-container">
            <CardTitle title="Welcome to Touch Classify" subtitle="Developed by HexHack" />
            <CardText>
                <TextField className="tc-login-textfield tc-username" hintText="Username" type="text" onChange={this._usernameChange} />
                <TextField className="tc-login-textfield tc-password" hintText="Password" type="password" onChange={this._passwordChange} />
            </CardText>
            <CardActions>
                <RaisedButton className="tc-login-button tc-button-submit" label={loginLabel} primary={true} fullWidth={true} onClick={this._login}>
                    { this.state.waitingForResponse ? <i className="material-icons md-light tc-animation-spin">rotate_left</i>: null}
                </RaisedButton>
                <FlatButton className="tc-login-button tc-button-recover" label="Forgot password?" fullWidth={true} />
            </CardActions>
        </Card>
    },
    getInitialState: function() {
        return this.initialState;
    },
    _usernameChange: function(event){
        this.setState({ username: event.target.value });
    },
    _passwordChange: function(event){
        this.setState({ password: event.target.value });
    },
    _beforeLogin: function() {
        this.setState({ waitingForResponse : true });
    },
    _afterLogin: function() {
        this.setState({ waitingForResponse : false});
        this.props.success({token: "1234"});
    },
    _login: function(event) {
        this._beforeLogin();
        setTimeout(this._afterLogin, 2000);
    }
    
});

module.exports = Login;