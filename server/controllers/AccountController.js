var express = require("express");
var DatabaseService = require("../services/DatabaseService");
var Controller = require("./Controller");

var AccountController = Controller.createController({
    rootUrl: "account",
    defineRoutes: function(router){
        router.post("/login", function(request, response){
            var responseJson = {};
            
            
            
        })
        .
    }
});

console.log(AccountController);

module.exports = AccountController;
