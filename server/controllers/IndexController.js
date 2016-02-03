var Controller = require("./Controller");
var express = require("express");
var path = require("path");

var IndexController = Controller({
    rootUrl: "/",
    indexHandler: function(req, res){
        res.end("index.html");
    },
    defineRoutes: function(router){
        
        var staticConfig = {
            index: "index.html",
            maxAge: 60000
        }
        router.use(express.static(path.resolve(__dirname, "../../app"), staticConfig));
        
        router.get("/", this.indexHandler);
        return router;
    }
});
console.log(IndexController);
module.exports = IndexController;

