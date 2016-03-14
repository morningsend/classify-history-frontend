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
import Thumbnail from './image/Thumbnail';
import Canvas from './canvas/Canvas';
import { ContextMenu, ThumbnailContextMenu } from './menu/ContextMenu';
import LoginDialog from './login/LoginDialog';


import Backend from './Backend';
InjectTapPlugin();

class UploadFile extends React.Component{

    constructor(props){
        super(props)
        this.state = {txt:''}
        this.update = this.update.bind(this)
        this.backend = new Backend( "http://localhost:8080" );
    }
    onDrop (files) {
      console.log('Received files: ', files);
    }
    update(e){
        this.setState({txt:e.target.value})
    }
    render(){
        var componentConfig = {
            iconFiletypes: ['.jpg', '.png', '.gif'],
            showFiletypeIcon: true,
            //postUrl: '/uploadHandler'
            postUrl: this.backend.getImageUploadURL()
            // Notice how there's no postUrl set here
        };
        var djsConfig = {
            addRemoveLinks: true,
            acceptedFiles: "image/jpeg,image/png,image/gif"
        };
        var callbackArray = [
            function () {
                console.log('Look Ma, I\'m a callback in an array!');
            },
            function () {
                console.log('Wooooow!');
            }
        ];
        var eventHandlers = {
            // All of these receive the event as first parameter:
            drop: callbackArray,
            dragstart: null,
            dragend: null,
            dragenter: null,
            dragover: null,
            dragleave: null,
            // All of these receive the file as first parameter:
            addedfile: simpleCallBack,
            removedfile: null,
            thumbnail: null,
            error: null,
            processing: null,
            uploadprogress: null,
            sending: null,
            success: null,
            complete: null,
            canceled: null,
            maxfilesreached: null,
            maxfilesexceeded: null,
            // All of these receive a list of files as first parameter
            // and are only called if the uploadMultiple option
            // in djsConfig is true:
            processingmultiple: null,
            sendingmultiple: null,
            successmultiple: null,
            completemultiple: null,
            canceledmultiple: null,
            // Special Events
            totaluploadprogress: null,
            reset: null,
            queuecompleted: null
        }
        var simpleCallBack = function () {
            console.log('I\'m a simple callback');
        };

        return<div {...this.props}>
            {/* <DropzoneComponent onDrop={this.onDrop}>
               <div>Try dropping some files here, or click to select files to upload.</div>
             </Dropzone>*/}
            <DropzoneComponent config={componentConfig}
            djsConfig = {djsConfig} eventHandlers = {eventHandlers}
                    />
          </div>
    }
}
// stateless child
const UploadCanvas = (props) =>{
    return <div>
               <input type = "text"
               onChange = {props.update} />
               <h1>{props.txt}</h1>
          </div>
}
class FloatingToolbar extends React.Component {
    constructor (props) {
        super(props);
    }
    render() {

        return <div {... this.props}>
            <IconButton icon="undo" />
            <IconButton icon="redo" />
            <IconButton icon="zoom_in" />
            <IconButton icon="zoom_out" />
            <IconButton icon="add_box" />
            <IconButton icon="content_copy" />
            <IconButton icon="content_paste" />
            <IconButton icon="fullscreen" />
            <IconButton icon="screen_rotation" />
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
            showLogin: false
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

        return <div className="app-container">


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
                <Canvas className="canvas">

                    <Thumbnail url='https://unsplash.it/200/150/?random' onContextMenu={this._handleThumbnailContextMenu.bind(this)} />
                    <Thumbnail url='https://unsplash.it/200/200/?random' onContextMenu={this._handleThumbnailContextMenu.bind(this)} />

                </Canvas>
                <UploadFile className= "upload-file filepicker dropzone"/>
                <Button icon="cloud" floating primary className="floating-button" />
                <FloatingToolbar className="floating-toolbar dock-bottom" />
                <ThumbnailContextMenu left={this.state.left} top={this.state.top} show={this.state.show} onHide={this._handleThumbnailContextMenuClose.bind(this)} />
                <LoginDialog active={this.state.showLogin} onLogin={this._handleLogin.bind(this)} onCancel={this._loginCancelled.bind(this)}/>
            </div>;
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
