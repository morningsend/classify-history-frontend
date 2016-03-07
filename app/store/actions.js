'use strict';

export const INITIALIZE_APP_DATA = 'INITIALIZE_APP_DATA_FROM_LOCAL_STORAGE';
export const SAVE_APP_DATA = 'SAVE_APP_DATA_TO_LOCAL_STORAGE';

const LOCAL_STORAGE_ID = 'CLASSIFY_HISTORY_APP';

export function initializeAppDataLocal(){
    return {
        type: INITIALIZE_APP_DATA,
        storageID: LOCAL_STORAGE_ID
    }
}
export function saveAppDataLocal(){
    return {
        type: SAVE_APP_DATA,
        storageID: LOCAL_STORAGE_ID
    }
}



export const UserToolbarCommands = {
    REDO_EDIT: 'USER_COMMAND_REDO_EDIT',
    UNDO_EDIT: 'USER_COMMAND_UNDO_EDIT',
    CHANGE_ORIENTATION: 'USER_COMMAND_CHANGE_ORIENTATION',
    COPY_PROPERTIES: 'USER_COMMAND_COPY_PROPERTIES',
    PASTE_PROPERTIES: 'USER_COMMAND_PASTE_PROPERTIES',
    ZOOM_IN: 'USER_COMMAND_ZOOM_IN',
    ZOOM_OUT: 'USER_COMMAND_ZOOM_OUT'
};

export const USER_LOG_IN = 'USER_LOG_IN';
export const USER_LOG_OUT = 'USER_LOG_OUT';

export function userLogIn(username, password){
    return {
        type: USER_LOG_IN,
        username,
        password
    }
}

export function userLogOut(){
    return {
        type: USER_LOG_OUT
    }
}
