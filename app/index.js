import React from "react";
import ReactDOM from "react-dom";
import AppRoot from "./components/AppRoot";

import { Provider } from "react-redux";
import { createStore } from "redux";

import { AppRoot as AppRootReducer } from "./reducers/AppRoot.js" ;

import { Router, Link, Route, browserHistory, IndexRoute, RouterContext } from "react-router";

import "./less/style.less";

import Dashboard from "./components/dashboard/Dashboard"; 
import WorkSpaceView from "./components/workspace-view/WorkSpaceView";
import CollectionView from "./components/collection-view/CollectionView";

let store = createStore(AppRootReducer);

const TouchApp =(props)=> <AppRoot {...props} />

ReactDOM.render(
<Provider store={store}>
    <Router history={browserHistory} render={props => <RouterContext {...props} />}>
        <Route path="/" component={TouchApp} >
            <IndexRoute component={WorkSpaceView} />
            <Route path="workspace" component={WorkSpaceView} />
            <Route path="image-collections" component={CollectionView} />
            <Route path="dashboard" component={Dashboard} />
            <Route path="*" component={WorkSpaceView} />
        </Route>
    </Router>
</Provider> , document.querySelector("#wrapper"));