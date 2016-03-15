import React, { Component,PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {ItemTypes} from './constants'
const ImageSource = {
  beginDrag(props){
    return{};
  }
};

function collect (connect,monitor){
  return {
    connectDragSource:connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}
class Images extends Component{
  render(){
    const {connectDragSource,isDragging} = this.props;
    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
        zIndex:'9999'
      }}>
        ♘
      </div>
    );
  }
}
Images.propTypes= {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
}
export default DragSource(ItemTypes.IMAGE,ImageSource,collect)(Images);
