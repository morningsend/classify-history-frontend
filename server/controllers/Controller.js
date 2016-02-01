
var express = require("express");


 function ControllerCreate(props){
    var controller = {};
    var self = controller;
    
    self.rootUrl = props.rootUrl || "/";
    
    self.handlers = props.defineRoutes ? props.defineRoutes(self.router) : [],
    self.router = express.Router(self.rootUrl, self.handlers);
    self.getRouter = function() {
        return self.router;
    } 
    return self;
}
var Controller = Object.create(Object);

module.exports = Controller;