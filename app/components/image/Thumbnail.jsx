import React from "react"
import { Card, CardMedia, CardTitle, CardText, CardActions } from "react-toolbox/lib/card";
import { Button } from "react-toolbox/lib/button";
import Checkbox from "react-toolbox/lib/checkbox";

import ClassNames from "classnames";
import "./style.less";
import CanvasDraggableEnhancer from "../canvas/CanvasDraggableEnhancer";


export class Thumbnail extends React.Component {
    
    
    constructor(props){
        super(props);
    }
    render (){
        var cssClass = ClassNames(this.props.className, "image-thumbnail" , { "selected": this.props.selected } );
        return <div className={cssClass}> <Card className="image-thumbnail-inner" {...this.props}>
                    <CardTitle title="image xxx" className="image-name" />
                    <Checkbox checked={true} className="image-select-toggle" onChange={() => this.props.onSelectChange(this.props.id)}/>
                    <CardMedia
                            aspectRatio="square"
                            image={this.props.url}
                            contentOverlay={true}
                     />
                    </Card>
                </div>
    }
}

Thumbnail.propTypes = {
    url: React.PropTypes.string,
    keywords: React.PropTypes.array,
    metadata: React.PropTypes.object,
    onRightClick: React.PropTypes.func,
    menu: React.PropTypes.element,
    selected: React.PropTypes.bool,
    onSelectChange: React.PropTypes.func
}

export default Thumbnail;
export const DraggableThumbnail = CanvasDraggableEnhancer(Thumbnail);