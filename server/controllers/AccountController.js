var express = require("express");
var DatabaseService = require("../services/DatabaseService");
var Controller = require("./Controller");
var AccountService = require("../services/AccountService");


var AccountController = Controller({
    rootUrl: "/account",
    defineRoutes: function(router){
        var self = this;
        var rootUrl = this.rootUrl;
        console.log(self);
        console.log("accountController" + router);
        router.post("/login", function(request, response){
            response.end("login endpoint");
        });
        router.post("/logout", function (request, response){
            response.end("logout endpoint");
        });
        router.post("/update", function(request, response){
            response.end("update endpoint");
        });
        return router;
    }
});

module.exports = AccountController;
