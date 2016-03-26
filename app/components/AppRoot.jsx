import React  from "react";
import AppBar from "react-toolbox/lib/app_bar";
import Navigation from "react-toolbox/lib/navigation";
import {Button, IconButton} from 'react-toolbox/lib/button';
import Link from 'react-toolbox/lib/link';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import Autocomplete from 'react-toolbox/lib/autocomplete';

import InjectTapPlugin from 'react-tap-event-plugin';
import Dropzone from 'react-dropzone';
import DropzoneComponent from 'react-dropzone-component';
import Slider, {SliderItem} from './slider/Slider';
import Thumbnail, { DraggableThumbnail } from './image/Thumbnail';
import Canvas from './canvas/Canvas';
import { ContextMenu, ThumbnailContextMenu } from './menu/ContextMenu';
import LoginDialog from './login/LoginDialog';

import './RootStyle';

import Backend from './Backend';
InjectTapPlugin();


class FloatingToolbar extends React.Component {
    constructor (props) {
        super(props);
    }
    render() {
        
        return <div {... this.props}>
            <IconButton icon="undo" onClick={this.props.onUndo}/>
            <IconButton icon="redo" onClick={this.props.onRedo}/>
            <IconButton icon="zoom_in" onClick={this.props.onZoomIn}/>
            <IconButton icon="zoom_out" onClick={this.props.onZoomOut}/>
            <IconButton icon="add_box" onClick={this.props.onAdd}/>
            <IconButton icon="content_copy" onClick={this.props.onCopy} />
            <IconButton icon="content_paste" onClick={this.props.onPaste}/>
            <IconButton icon="fullscreen" onClick={this.props.onFullScreen}/>
            <IconButton icon="screen_rotation" onClick={this.props.onOrientationChange} />
        </div>

    }
}



class AppRoot extends React.Component {
    constructor(props ) {
        super(props);
        this.state={
            show:false,
            left: 0,
            top: 0,
            showLogin: false,
            images: this.getImages(10),
            inverted: false,
            zoom: 1.0,            
        }

        this.backend = new Backend( "http://localhost:8080" );
    }
    _onDrop(){
        //  var req = request.post('/upload');
        // files.forEach((file)=> {
        //     req.attach(file.name, file);
        // });
        // req.end(callback);
        console.log("receive file ")
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
                <div className="header">
                    <ProgressBar type="linear" mode="indeterminate" className="progress-bar" />
                    <AppBar  className="navbar-main">
                        <h1 className="navbar-title">Classify Hisry</h1>
                        <Navigation className="navbar-group">
                            <Link href="" label="My Projects" className="navbar-link" active/>
                            <Link href="" label="Image Collection" className="navbar-link" />
                        </Navigation>
                        <Navigation className="navbar-group float-right" >
                            <Button label="Settings" inverse/>
                            <Button label="Log in" inverse primary onClick={this._showLogin.bind(this)}/>
                        </Navigation >
                    </AppBar>
                    <AppBar className="navbar-main">
                        <Navigation className="navbar-group" >
                            <Button label="Edit" icon="edit" inverse/>
                        </Navigation >
                        <Navigation className="navbar-group float-right" >
                            <Button label="shanghai" icon="gavel" inverse/>
                            <Autocomplete
                                direction="right"
                                label="Find Tags"
                                name="countries"
                                onChange={null}
                                source={{"china":"china"}}
                                value="coutr"
                                icon="search"
                                className="tag-search-box"
                            />
                        </Navigation >
                    </AppBar>

                    <Slider className="slider" >
                        <SliderItem className="slider-item" ><img src="https://unsplash.it/200/150/?random" /></SliderItem>
                        <SliderItem className="slider-item" ><img src="https://unsplash.it/300/150/?random" /></SliderItem>
                        <SliderItem className="slider-item" ><img src="https://unsplash.it/200/200/?random" /></SliderItem>
                        <SliderItem className="slider-item" ><img src="https://unsplash.it/300/150/?random" /></SliderItem>
                        <SliderItem className="slider-item" ><img src="https://unsplash.it/200/150/?random" /></SliderItem>
                        <SliderItem className="slider-item" ><img src="https://unsplash.it/300/150/?random" /></SliderItem>
                        <SliderItem className="slider-item" ><img src="https://unsplash.it/200/150/?random" /></SliderItem>
                        <SliderItem className="slider-item" ><img src="https://unsplash.it/300/150/?random" /></SliderItem>
                    </Slider>

                </div>
                <Canvas className="canvas" images={this.state.images} />
                <Button icon="cloud" floating primary className="floating-button" />
                <FloatingToolbar className="floating-toolbar dock-bottom" 
                    onOrientationChange={this.invertOrientation.bind(this)}
                />
                <ThumbnailContextMenu left={this.state.left} top={this.state.top} show={this.state.show} onHide={this._handleThumbnailContextMenuClose.bind(this)} />
                <LoginDialog active={this.state.showLogin} onLogin={this._handleLogin.bind(this)} onCancel={this._loginCancelled.bind(this)}/>
            </div>;
    }
    invertOrientation(){
        this.setState({
            inverted: !this.state.inverted
        });
    }
    getImages(n){
        if(n < 0) return null;
        var images = [];
        for(var i = 0; i< n; i++){
            images.push({
                id:i,
                url: "https://unsplash.it/200/200?random&"+i,
                top: Math.random()*300,
                left: Math.random()*500
                
            })
        }
        
        return images;
    }
    _handleThumbnailContextMenu(e){
        this.setState({
            show: true,
            left:e.clientX,
            top: e.clientY
        });
        e.preventDefault();
    }
    _handleThumbnailContextMenuClose(...args){
        this.setState({show:false});
    }
}

export default AppRoot;
