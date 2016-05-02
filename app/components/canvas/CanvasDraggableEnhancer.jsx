import React, { Component, Proptypes } from 'react';
import Hammer from 'react-hammerjs';

const CanvasDraggableEnhancer = ( Incoming ) => class extends Component {
    constructor(props){
        super(props);

        this.state = this.getTransform();
    }
    getTransform(){
        return {
            position: {
                top: this.props.top || 0,
                left: this.props.left || 0,
            },
            translate: {
                x: 0,
                y: 0,
            },
            rotate: {
                deg: 0.0,
            },
            scale: {
                x: 1.0,
                y: 1.0,
            }
        };
    }
    render(){
        var {style,id, ...childProps} = this.props;
        style= style||{};
        style.transform = this.getCSSTransform();
        style.position = "absolute";
        style.top = this.state.position.top;
        style.left = this.state.position.left;
        return <Hammer key={id}
            onTap={ this.handleTap.bind(this) }
            onDrag={ this.handleDrag.bind(this) }
            onDoubleTap={ this.handleDoubleTap.bind(this) }
            style={ style }
            onPanStart={this.handlePanStart.bind(this) }
            onPan={ this.handlePan.bind(this) }
            onPanEnd={ this.handlePanEnd.bind(this) }
            ><Incoming {...childProps} key={id+"1"}/></Hammer>
    }

    getCSSTransform(){
        var translate = "translate3d("+this.state.translate.x+"px,"+this.state.translate.y+"px,0)";
        var rotate = "rotate("+this.state.rotate.deg+"deg)";
        var scale = "scale("+this.state.scale.x+", "+this.state.scale.y+")";
        return [translate, rotate, scale].join(" ");
    }

    handleTap(e){
        //console.log(e);
        if( this.props.handleTap != null )
        {
          this.props.handleTap( e );
        }
    }
    handlePanStart(e){

    }
    handlePan(e){
        console.log("pan")
        this.setState({
            translate: {
                x: e.deltaX,
                y: e.deltaY,
            }
        });
    }
    handlePanEnd(e){
        console.log("panend")
        var position = this.state.position;
        var translate = this.state.translate;
        this.setState({
            position:{
                left: position.left + translate.x,
                top: position.top + translate.y
            },
            translate: {
                x:0,
                y:0
            }
        });
    }
    handlePanStart(e){

    }
    handleDoubleTap(e){

    }

    handleDrag(e){

    }
}

export default CanvasDraggableEnhancer;
