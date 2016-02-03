var express = require("express");
var Controller = function (options){
    var rootUrl = options.rootUrl || "/";
    var router = options.defineRoutes? options.defineRoutes(express.Router()) : express.Router();
    return {
        rootUrl: rootUrl,
        router: router
    };
};

module.exports = Controller;