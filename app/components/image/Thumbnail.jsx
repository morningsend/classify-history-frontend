import React from 'react'
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import ClassNames from 'classnames';

import './style.less';
export class Thumbnail extends React.Component {
    
    
    constructor(props){
        super(props);
        this.state = {
            selected: false
        }
    }
    render (){
        var cssClass = ClassNames(this.props.className, 'image-thumbnail' , { 'selected': !this.state.selected } );
        return <Card className={cssClass} {...this.props} >
                    <CardMedia
                            aspectRatio='wide'
                            image={this.props.url}
                            contentOverlay={true}
                     />
                </Card>
    }
}

Thumbnail.propTypes = {
    url: React.PropTypes.string,
    keywords: React.PropTypes.array,
    metadata: React.PropTypes.object,
    onRightClick: React.PropTypes.func,
    menu: React.PropTypes.element,
}

export default Thumbnail;