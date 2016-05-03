import React, { Component } from "react";
import Slider, {SliderItem} from "../slider/Slider";
import Thumbnail, { DraggableThumbnail } from "../image/Thumbnail";
import Canvas from "../canvas/Canvas";
import { ContextMenu, ThumbnailContextMenu } from "../menu/ContextMenu";
import AppBar from "react-toolbox/lib/app_bar";
import Navigation from "react-toolbox/lib/navigation";
import {Button, IconButton} from "react-toolbox/lib/button";
import DraggableButton from "../button/DraggableButton";
import Autocomplete from "react-toolbox/lib/autocomplete";
import FloatingToolbar from "../floating-toolbar/FloatingToolbar";
import Backend from "../Backend";
import ReactDOM from "react-dom";

class WorkSpaceView extends Component {
    constructor(props){
        super(props);
        this.backend = new Backend( "http://localhost:8080" );
        this.base = Math.floor(Math.random() * 1000);
        this.state={
            showThumbnailContextMenu:false,
            left: 0,
            top: 0,

            images: this.getImages(20),
            inverted: false,
            zoom: 1.0,
            initialSource: [],
            source: [],
            currentValue: "",
            blabel: "China",
        }

        this.backend.getTagList().then(
          ( data ) =>
          {
            data.tags.map(
              ( tag ) =>
              {
                this.setState(
                  { initialSource: this.state.initialSource.concat( [tag.name] ) }
                )
              }
            );
          },
          function( error ){}
        );
    }

    hideImageCollections() {
        this.setState({
            showImageCollectionViewer: false
        });
    }

    render(){
        return (<div>
            <AppBar className="navbar-main">
                <Navigation className="navbar-group float-right" >
                    <Button label={this.state.blabel} icon="gavel" inverse/>
                    <Autocomplete
                        direction="down"
                        label="Tag"
                        name="countries"
                        onChange={
                          (event, value) =>
                          {
                            this.setState(
                              { blabel: event[ 0 ] }
                            );
                          }
                        }
                        onSelect={
                          (value, item) =>
                          {
                            if( value.target.value != "" )
                            {
                              this.setState(
                                { source: this.state.initialSource.concat( [value.target.value] ) }
                              );
                            }
                            else {
                              this.setState(
                                { source: this.state.initialSource }
                              );
                            }
                          }
                        }
                        source={this.state.source}
                        value="country"
                        icon="search"
                        className="tag-search-box"
                    />
                </Navigation >
            </AppBar>

            <Canvas className="canvas" images={this.state.images} ref="canvas_1"/>
            <DraggableButton floating icon="cloud" primary top={300} left={100} handleTap={
              (e) =>
              {
                var size = ReactDOM.findDOMNode( this.refs.canvas_1 ).getBoundingClientRect();

                var inClass = [];
                var outClass = [];
                var boundary = size.width / 2;

                for( var key in this.refs.canvas_1.refs )
                {
                  var value = this.refs.canvas_1.refs[ key ];
                  if( value.state.position.left > boundary )
                  {
                    inClass.push( value );
                  }
                  else
                  {
                    outClass.push( value );
                  }
                }

                this.backend.createTag( this.state.blabel ).then(
                  ( data ) =>
                  {
                    inClass.map(
                      ( img ) =>
                      {
                        this.backend.tagImage( img.props.id, data.id ).then(
                          ( data ) => {},
                          ( error ) => {}
                        );
                      }
                    );

                    outClass.map(
                      ( img ) =>
                      {
                        this.backend.untagImage( img.props.id, data.id ).then(
                          ( data ) => {},
                          ( error ) => {}
                        );
                      }
                    );
                  },
                  ( error ) => {}
                );
              }
            }/>
            <ThumbnailContextMenu left={this.state.left} top={this.state.top} show={this.state.showThumbnailContextMenu} onHide={this._handleThumbnailContextMenuClose.bind(this)} />
        </div>)
    }

    getImages(n){
      this.backend.getImageList().then(
        function( data ){},
        function( e ){}
      );
        if(n < 0) return null;
        var images = [];
        for(var i = this.base; i< this.base+n; i++){
            images.push({
                id:i,
                url: "https://unsplash.it/200/200?image="+i,
                top: 400 + Math.random()*300,
                left: 120 + Math.random()*500
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
    }
}

export default WorkSpaceView;
