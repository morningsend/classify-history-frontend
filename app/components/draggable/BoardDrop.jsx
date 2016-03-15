import React, {Component,PropTypes} from 'react';
import Canvas from '../canvas/Canvas'
import { DropTarget } from 'react-dnd';


function moveImage(x,y){
  return;
}

function collect (connect,monitor){
  return {
    connectDropTarget:connect.dropTarget(),
    isOver:monitor.isOver()
  }
}

class BoardDrop extends Component{
  render(){
    const {black}= this.props;
    const fill = !black?'black':'white';
    const stroke = !black?'white':'black';
    return (
      <div style = {{
          backgroundColor:fill,
          color:stroke,
          width:'100%',
          height:'100%'
        }}>
        {this.props.children}
      </div>
    )
  }
}
BoardDrop.propTypes = {

  black:PropTypes.bool

}
export default BoardDrop;
