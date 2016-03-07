import React from 'react';
import ClassNames from 'classnames';
import './style.less';


export class Canvas extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {};
    }
    render() {
        //console.log(this.props.children);
        var cssClass = ClassNames(this.props.className, "canvas-container");
        return <div className={cssClass} >
            <div className="canvas-inner">
                {this.props.children}
            </div>      
            </div>;
    }
}

export default Canvas;