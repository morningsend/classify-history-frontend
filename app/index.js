import React from "react";
import ReactDOM from "react-dom";
import AppRoot from "./components/AppRoot";
import ToolboxApp from 'react-toolbox/lib/app';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { AppRoot as AppRootReducer } from './reducers/AppRoot.js' ;

require("./less/style.less");


var store = createStore(AppRootReducer);

ReactDOM.render(
<Provider store={store}>
    <ToolboxApp> 
        <AppRoot />
    </ToolboxApp> 
</Provider> , document.querySelector("#wrapper"));