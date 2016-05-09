import * as Types from "../constants/actiontypes";

const initialState = {
    images : []
}

export function canvas(state = initialState, action){
    
    switch (action.type){
        case Types.THUMB_TOGGLE_SELECT:
            
            break;
        case Types.THUMB_ADD_IMAGE_THUMB:
        
            break;
        case Types.THUMB_HIDE_IMAGE_THUMB:
        
            break;
        case Types.THUMB_TRANSLATE:
            
            break;
        default:
            break;
    }
    return state;
}
export default canvas;