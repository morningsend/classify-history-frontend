import React from "react";
import ReactDOM from "react-dom";
import { AppRoot } from "./components/AppRoot";
import ToolboxApp from 'react-toolbox/lib/app';
require("./less/style.less")

ReactDOM.render(
    <ToolboxApp> <AppRoot /></ToolboxApp> , document.querySelector("#wrapper"));