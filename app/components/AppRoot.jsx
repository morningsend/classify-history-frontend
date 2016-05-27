import React  from "react";
import AppBar from "react-toolbox/lib/app_bar";
import Navigation from "react-toolbox/lib/navigation";
import {Button, IconButton} from "react-toolbox/lib/button";
import ProgressBar from "react-toolbox/lib/progress_bar";
import { Link, withRouter } from "react-router";
import InjectTapPlugin from "react-tap-event-plugin";
import LoginDialog from "./login/LoginDialog";
import { connect } from "react-redux";
import "./RootStyle";

InjectTapPlugin();


class AppRoot extends React.Component {
    constructor(props, context ) {
        super(props, context);
        this.state={
            showLogin: false,
            isAuthenticated: false
        }
    }
    componentDidMount(){
        const dispatch = this.props;
        console.log(this.props);
    }
   
    _showLogin() {
        this.setState({
            showLogin: true
        });
    }
    _loginCancelled(){
        this.setState({
            showLogin: false
        });
    }
    _loginComplete(){
        this.props.router.push("/dashboard")
    }
    _loginFailed(){
        
    }
    _handleLogin(username, password){
        this.setState({
            isAuthenticated: true,
            showLogin: false
        })
        this._loginComplete()
    }
    _logOut(){
        this.setState({
            isAuthenticated: false,
        })
        this.props.router.push("/");
    }
    render () {
        
        const accountButton = !this.state.isAuthenticated ? 
            <Button label="Log in" inverse primary onClick={this._showLogin.bind(this)}/> :
            <Button label="Log out" inverse primary onClick={this._logOut.bind(this)} />
            
        const settingsButton = !this.state.isAuthenticated?
            null 
            : <Button label="Settings" inverse/>
            
        return <div className="app-container">
                <header className="header">
                    <ProgressBar type="linear" mode="indeterminate" className="progress-bar" />
                    <AppBar  className="navbar-main">
                        <h1 className="navbar-title">Classify History</h1>
                        <Navigation className="navbar-group float-right" >
                            { settingsButton }
                            { accountButton }
                        </Navigation>
                    </AppBar>
                </header>
                <main className="main-content">
                    {this.props.children}
                </main>
                <div className="hidden">
                <LoginDialog active={this.state.showLogin} 
                    onLogin={this._handleLogin.bind(this)} 
                    onCancel={this._loginCancelled.bind(this)}
                    registerUrl="/register"
                />
                </div>
            </div>;
    }
}

function mapStateToProps(state){
    console.log(state)
    return {
        
    }
}

AppRoot.propTypes = {
    history: React.PropTypes.object,
    dispatch: React.PropTypes.func,
    router: React.PropTypes.object
}

export default connect(mapStateToProps)(withRouter(AppRoot));
