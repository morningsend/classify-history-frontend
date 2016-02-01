var express = require("express");
var DatabaseService = require("../services/DatabaseService.js");


function UserController(options) {
    var router = express.Router();
    var Database = DatabaseService({userMock: true}).connect();
    
    var rootUrl = options.url || "users";
    
    router.get(rootUrl+"/:username", function(request, response){
        var user = Database.User.findUserByUsername(request.params.username);
        response.json(user);
    });
    router.get(rootUrl+"/all", function(request, response){
        var users = Database.User.findAll();
        response.json(users);        
    });
    
    function getRouter(){
        return router;
    }
    
    return {
        router: getRouter
    };
}
module.exports = UserController();