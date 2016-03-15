import React, {Component, PropTypes} from 'react';
import  BoardDrop from './BoardDrop';
import Images from './Images';
class Board extends Component{
  render(){
    return (<div>
      <BoardDrop black = {false}>
        <Images />
        </BoardDrop>
      </div>
    )
  }

}
Board.propTypes = {
  imagePosition: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired

}
export default Board;
