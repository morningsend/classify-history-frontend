var DatabaseService = require("./DatabaseService");
var md5 = require("md5");

var AccountService = function(database){
    function authenticate(username, passwordHash){
        var user = database.findByUsername(username);
        if(user){
            user.password === passwordHash;
            return generateToken(username);
        }
    }
    function generateToken(string){
        return md5(string + Date.now());
    }
    function logout(token){
        
    }
    function login(token){
        
    }
    function updateUser(user){
        
    }
    return {
        
    }
};

module.exports = AccountService;