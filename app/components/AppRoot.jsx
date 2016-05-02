import React  from "react";
import AppBar from "react-toolbox/lib/app_bar";
import Navigation from "react-toolbox/lib/navigation";
import {Button, IconButton} from "react-toolbox/lib/button";
import ProgressBar from "react-toolbox/lib/progress_bar";
import { Link } from "react-router";
import CanvasDraggableEnhancer from "./canvas/CanvasDraggableEnhancer";
import InjectTapPlugin from "react-tap-event-plugin";
import LoginDialog from "./login/LoginDialog";
import "./RootStyle";
import Backend from "./Backend";
InjectTapPlugin();


class AppRoot extends React.Component {
    constructor(props ) {
        super(props);
        this.state={
            showLogin: false,
        }

        this.backend = new Backend( "http://localhost:8080" );
    }
    showImageCollections(e){
        e.preventDefault();
        this.setState({
            showImageCollectionViewer: true,
        });
    }
    _showLogin() {
        this.setState({
            showLogin: true
        });
        console.log("hehahahah");
    }
    _loginCancelled(){
        this.setState({
            showLogin:false
        });
    }
    _loginComplete(){
        this.setState({
            showLogin:false
        });
    }
    _loginFailed(){

    }
    _handleLogin(username, password){
        var self = this;
        this.backend.login( username, password ).then(
          function( result ) { self._loginComplete(); },
          function( error ){ self._loginFailed(); }
        );
    }

    render () {
        return <div className="app-container" >
                <header className="header">
                    <ProgressBar type="linear" mode="indeterminate" className="progress-bar" />
                    <AppBar  className="navbar-main">
                        <h1 className="navbar-title">Classify History</h1>
                        <Navigation className="navbar-group">
                            <Link className="navbar-link" to="/">New Images</Link>
                        </Navigation>
                        <Navigation className="navbar-group float-right" >
                            <Button label="Log in" inverse primary onClick={this._showLogin.bind(this)}/>
                        </Navigation >
                    </AppBar>
                </header>
                <main className="main-content">
                    {this.props.children}
                </main>
                <div className="hidden">
                <LoginDialog active={this.state.showLogin} onLogin={this._handleLogin.bind(this)} onCancel={this._loginCancelled.bind(this)}/>
                </div>
            </div>;
    }
}

export default AppRoot;
