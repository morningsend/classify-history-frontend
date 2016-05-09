import React from 'react';
import ClassNames from 'classnames';
import './style.less';
import { DraggableThumbnail } from '../image/Thumbnail';

export class Canvas extends React.Component {
    
    constructor (props) {
        super(props)
    }
    render() {
        
        var cssClass = ClassNames(this.props.className, "canvas-container");
        var thumbnails = this.renderImages();
        return <div className={cssClass} >
            <div className="canvas-inner">
                { thumbnails }
            </div>
        </div>;
    }
    renderImages(){
        console.log(this.props);
        if(!this.props.images) return null;
        return this.props.images.map( ({url, id, top, left}) =>{
            return <DraggableThumbnail url={url} top={top} left={left} key={id} id={id} onSelectChange={this._handleThumbSelectChange.bind(this)} />
        })
    }
    _handleThumbSelectChange(id){
        const { dispatch } = this.props;
    }
}

Canvas.PropTypes = {
    images: React.PropTypes.array
}

export default Canvas;