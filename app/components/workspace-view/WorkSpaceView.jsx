import React, { Component } from 'react';


import Slider, {SliderItem} from '../slider/Slider';
import Thumbnail, { DraggableThumbnail } from '../image/Thumbnail';
import Canvas from '../canvas/Canvas';
import { ContextMenu, ThumbnailContextMenu } from '../menu/ContextMenu';

import DraggableButton from '../button/DraggableButton';
import Autocomplete from 'react-toolbox/lib/autocomplete';
import FloatingToolbar from '../floating-toolbar/FloatingToolbar';
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
             
        }
    }
    
    hideImageCollections() {
        this.setState({
            showImageCollectionViewer: false
        });
    }
    render(){
        return (<div><AppBar className="navbar-main">
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
                                value="coutry"
                                icon="search"
                                className="tag-search-box"
                            />
                        </Navigation >
                    </AppBar>

                    <Slider className="slider" >
                        {this.state.images.map((image)=><SliderItem className="slider-item"><img src={image.url} /></SliderItem>)}
                    </Slider>
                    <Canvas className="canvas" images={this.state.images} />
                    <DraggableButton floating icon="cloud" primary top={300} left={100} />
                    <FloatingToolbar className="floating-toolbar dock-bottom" 
                        onOrientationChange={this.invertOrientation.bind(this)}
                    />
                    <ThumbnailContextMenu left={this.state.left} top={this.state.top} show={this.state.showThumbnailContextMenu} onHide={this._handleThumbnailContextMenuClose.bind(this)} />
                    
                    
                    </div>
                    
        )
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
            showThumbnailContextMenu: true,
            left:e.clientX,
            top: e.clientY
        });
        e.preventDefault();
    }
    _handleThumbnailContextMenuClose(...args){
        this.setState({showThumbnailContextMenu:false});
    }
}

export default WorkSpaceView;