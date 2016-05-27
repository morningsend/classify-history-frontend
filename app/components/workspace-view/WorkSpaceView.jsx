import React, { Component } from "react";


import Slider, {SliderItem} from "../slider/Slider";
import Thumbnail, { DraggableThumbnail } from "../image/Thumbnail";
import Canvas from "../canvas/Canvas";
import CanvasContainer from "../canvas/CanvasContainer";
import { ContextMenu, ThumbnailContextMenu } from "../menu/ContextMenu";

import AppBar from "react-toolbox/lib/app_bar";
import Navigation from "react-toolbox/lib/navigation";
import {Button, IconButton} from "react-toolbox/lib/button";
import Chip from "react-toolbox/lib/chip";
import DraggableButton from "../button/DraggableButton";
import Autocomplete from "react-toolbox/lib/autocomplete";
import FloatingToolbar from "../floating-toolbar/FloatingToolbar";
import TagsView from "../tagsview/TagsView";


let tagsObject = {
    "china": "China",
    "Shanghai": "Shanghai",
    "ChiangKie-Shek":"Chian ke Shek",
    "Fashion" : "Fashion"
}

class WorkSpaceView extends Component {
    constructor(props){
        super(props);
        this.state={
            showThumbnailContextMenu:false,
            left: 0,
            top: 0,
            
            images: this.getImages(10),
            inverted: false,
            zoom: 1.0,
            tags: [],
            tagsWindowState: false,
            selectedImages: [],
            tagButtonDisable: true
        }
    }
    
    hideImageCollections() {
        this.setState({
            showImageCollectionViewer: false
        });
    }
    handleTagsChange(value){
        this.setState({
            tags: value
        })
    }
    tagButtonDisableState(){
        var disable = true;
        if(this.state.selectedImages.length > 0)
        {
            disable = false;
        }
        this.setState({tagButtonDisable: disable})       
    }
    render(){
        console.log("workspace view");
        console.dir(this.props);
        return (<div>
            <AppBar className="navbar-main">
                <Navigation className="navbar-group" >
                    <Button label="Tag" icon="gavel" inverse disabled={this.state.tagButtonDisable} />
                    {
                        this.state.tags.map(tag=><Chip>
                            <span>{tag}</span>
                        </Chip>)
                    }
                </Navigation >
                <Navigation className="navbar-group float-right" >
                    <Button label="search tags" icon="search" inverse 
                        onClick={this.toggleTagsViewDialog.bind(this)}/>
                </Navigation >
            </AppBar>
            <Slider className="slider" >
                {this.state.images.map((image)=><SliderItem className="slider-item" key={"image"+image.id}><img src={image.url} /></SliderItem>)}
            </Slider>
            <CanvasContainer className="canvas" images={this.state.images} />
            <DraggableButton floating icon="menu" primary top={300} left={100} />
            <FloatingToolbar className="floating-toolbar dock-bottom" 
                onOrientationChange={this.invertOrientation.bind(this)}
            />
            <ThumbnailContextMenu left={this.state.left} top={this.state.top} show={this.state.showThumbnailContextMenu} onHide={this._handleThumbnailContextMenuClose.bind(this)} />
            <TagsView 
                active={this.state.tagsWindowState} 
                onCancel={this.toggleTagsViewDialog.bind(this)}
                availableTags={tagsObject}
                selectedTags={this.state.tags}
                onChange={this.handleTagsChange.bind(this)}
                onTagsNotFound = {this.handleTagsNotFound.bind(this)}
            />
        </div>)
    }
    handleTagsNotFound(tag){
        
    }
    toggleTagsViewDialog(){
        this.setState({
            tagsWindowState: !this.state.tagsWindowState
        })
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
        /*this.setState({
            showThumbnailContextMenu: true,
            left:e.clientX,
            top: e.clientY
        });*/
        e.preventDefault();
    }
    _handleThumbnailContextMenuClose(...args){
        /* this.setState({showThumbnailContextMenu:false}); */
    }
    invertOrientation(){
        this.setState({
            inverted: !this.state.inverted
        });
    }
}

export default WorkSpaceView;