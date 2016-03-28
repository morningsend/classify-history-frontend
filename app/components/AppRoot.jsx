                                                                                                                                                                                                                                                                                                                import React  from "react";
import AppBar from "react-toolbox/lib/app_bar";
import Navigation from "react-toolbox/lib/navigation";
import {Button, IconButton} from 'react-toolbox/lib/button';
import Link from 'react-toolbox/lib/link';
import ProgressBar from 'react-toolbox/lib/progress_bar';


import CanvasDraggableEnhancer from './canvas/CanvasDraggableEnhancer';

import InjectTapPlugin from 'react-tap-event-plugin';

import LoginDialog from './login/LoginDialog';


import './RootStyle';

import Backend from './Backend';
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
          function( result ) { self.__loginComplete(); },
          function( error ){ self._loginFailed(); }
        );
    }
    
    render () {
        var invertedTransform = this.state.inverted ? {
            transform: "rotate(180deg)",
        } : null;
        return <div className="app-container" style={invertedTransform} >
                <header className="header">
                    <ProgressBar type="linear" mode="indeterminate" className="progress-bar" />
                    <AppBar  className="navbar-main">
                        <h1 className="navbar-title">Classify History</h1>
                        <Navigation className="navbar-group">
                            <Link href="/" label="Dashboard" className="navbar-link" />
                            <Link href="/workspace" label="Work space" className="navbar-link" active/>
                            <Link href="/image-collections" label="Image Collection" className="navbar-link" />
                        </Navigation>
                        <Navigation className="navbar-group float-right" >
                            <Button label="Settings" inverse/>
                            <Button label="Log in" inverse primary onClick={this._showLogin.bind(this)}/>
                        </Navigation >
                    </AppBar>
                </header>
                <main className="main-content">
                    {this.props.children}
                </main>
                <div className='hidden'>
                <LoginDialog active={this.state.showLogin} onLogin={this._handleLogin.bind(this)} onCancel={this._loginCancelled.bind(this)}/>
                </div>
            </div>;
    }
    invertOrientation(){
        this.setState({
            inverted: !this.state.inverted
        });
    }
    
}

export default AppRoot;
