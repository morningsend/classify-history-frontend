import * as Types from "../constants/actiontypes";

export const canvasThumbToggleSelect = (imageId) => {
    return {
        type: Types.THUMB_TOGGLE_SELECT,
        id: imageId
    }
}
export const canvasAddImageThumb = (image) => {
    return {
        type: Types.THUMB_ADD_IMAGE_THUMB,
        image: image
    }
}

export const canvasHideImageThumb = (image) => {
    return {
        type: Types.THUMB_HIDE_IMAGE_THUMB,
        id: image.id
    }
}
export const canvasThumbTranslate = (image, position) => {
    return {
        type: Types.THUMB_TRANSLATE,
        id: image.id,
        position: position
    }
}