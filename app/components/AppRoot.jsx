import React  from "react";
import AppBar from "react-toolbox/lib/app_bar";
import Navigation from "react-toolbox/lib/navigation";
import {Button, IconButton} from 'react-toolbox/lib/button';
import Link from 'react-toolbox/lib/link';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import Autocomplete from 'react-toolbox/lib/autocomplete';

import InjectTapPlugin from 'react-tap-event-plugin';

import Slider, {SliderItem} from './slider/Slider';
import Thumbnail from './image/Thumbnail';
import Canvas from './canvas/Canvas';
import { ContextMenu, ThumbnailContextMenu } from './menu/ContextMenu';

InjectTapPlugin();

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
            top: 0
        }
    }

    _handleLogin() {
        console.log("hehahahah");
    }
    render () {
        
        return <div className="app-container">
                <div className="header">
                    <ProgressBar type="linear" mode="indeterminate" className="progress-bar" />
                    <AppBar  className="navbar-main">
                        <h1 className="navbar-title">Classify History</h1>
                        <Navigation className="navbar-group">
                            <Link href="" label="My Projects" className="navbar-link" active/>
                            <Link href="" label="Image Collection" className="navbar-link" />
                        </Navigation>
                        <Navigation className="navbar-group float-right" >
                            <Button label="Settings" inverse/>
                            <Button label="Log in" inverse primary onClick={this._handleLogin}/>
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
                <Canvas className='canvas'>
                    <Thumbnail url='https://unsplash.it/200/150/?random' onContextMenu={this._handleThumbnailContextMenu.bind(this)} />
                    <Thumbnail url='https://unsplash.it/200/200/?random' onContextMenu={this._handleThumbnailContextMenu.bind(this)} />
                </Canvas>
                <Button icon="cloud" floating primary className="floating-button" />
                <FloatingToolbar className="floating-toolbar dock-bottom" />
                <ThumbnailContextMenu left={this.state.left} top={this.state.top} show={this.state.show} onHide={this._handleThumbnailContextMenuClose.bind(this)} />
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