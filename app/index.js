import React from "react";
import ReactDOM from "react-dom";
import AppRoot from "./components/AppRoot";

import { Provider } from "react-redux";
import { createStore } from "redux";

import { AppRoot as AppRootReducer } from "./reducers/AppRoot.js" ;

import { Router, Link, Route, hashHistory, IndexRoute } from "react-router";

import "./less/style.less";

import Dashboard from "./components/dashboard/Dashboard"; 
import WorkSpaceView from "./components/workspace-view/WorkSpaceView";
import CollectionView from "./components/collection-view/CollectionView";

var store = createStore(AppRootReducer);

const TouchApp =(props)=> <AppRoot {...props} />

ReactDOM.render(
<Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={TouchApp} >
            <IndexRoute component={Dashboard} />
            <Route path="workspace" component={WorkSpaceView} />
            <Route path="image-collections" component={CollectionView} />
            <Route path="*" component={WorkSpaceView} />
        </Route>
    </Router>
</Provider> , document.querySelector("#wrapper"));