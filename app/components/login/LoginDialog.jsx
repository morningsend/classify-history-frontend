import React from "react";
import Dialog from "react-toolbox/lib/dialog";
import Button from "react-toolbox/lib/button";
import Input from "react-toolbox/lib/input";
import { Link } from "react-router";

require("./style.less");

export class LoginDialog extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    }

    render(){
        const registerLink =<div className="message"> 
            <p>Don't have an account?</p>
            <Link to={this.props.registerUrl} target="_blank">Click here to register</Link>
            </div>
        return <Dialog active={this.props.active} {...this.props} className="login-dialog" onOverlayClick={this._handleCancel.bind(this)}>
            <p className="login-title">Log In To Your Account</p>
            <Input icon="perm_identity" type="text" label="User Name" name="username" value={this.state.username} onChange={this._handleUsernameChange.bind(this)} />
            <Input icon="lock" type="password" label="Password" name="password" value={this.state.password} onChange={this._handlePasswordChange.bind(this)} />
            <Button className="login-button"label="Log In" onClick={this.doLogin.bind(this)} />
            { registerLink }
        </Dialog>
    }
    _handlePasswordChange(e){

        this.setState({
            password: e,
        });
    }
    _handleUsernameChange(e){
        console.log(e);
        this.setState({
            username: e,
        });
    }
    _handleCancel(e){
        if(this.props.onCancel){
            this.props.onCancel();
        }
    }
    doLogin(username, password){
        if(this.props.onLogin){
            this.props.onLogin(this.state.username, this.state.password);
        }
    }
    doRegister(){
        if(this.props.onRegister){
            this.props.onRegister();
        }
    }
}

LoginDialog.propTypes = {
    onLogin: React.PropTypes.func,
    onRegister: React.PropTypes.func,
    registerUrl: React.PropTypes.string
}

export default LoginDialog;
