import React, { Component, PropTypes } from "react";

import "./style";

export class GridView extends Component {  
    render(){
        return <div className="gridview-container">
            { this.props.children }
        </div>
    }
}

export class Cell extends Component {
    render() {
        var cssClass = this.props.className ||"";
        cssClass+=" gridview-cell";
        return <div className={cssClass}>
            {this.props.children}
        </div>
    }
}

export default GridView;