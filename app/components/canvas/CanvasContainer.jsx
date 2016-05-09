import Canvas from './Canvas';

import { connect } from 'react-redux';


const mapStateToProp = (state) => {
    console.log("container canvas map state");
    console.log(state);
    var canvas = state.canvas;
    return {
        images: canvas.images
    }
}
const mapDispatchToProp = ({dispatch}) => {
    return {
        
    }
}

export const CanvasContainer =  connect(mapStateToProp)(Canvas);
export default CanvasContainer;