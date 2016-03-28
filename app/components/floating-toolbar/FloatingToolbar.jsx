import React, {Component} from 'react';
import {Button, IconButton} from 'react-toolbox/lib/button';

import './style';

class FloatingToolbar extends Component {
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

export default FloatingToolbar;