var md5 = require("md5");
var mockData = require("./mockdata.json");

var DatabaseService = function(options){
    var data = {};
    if (options.useMock){
        data = mockData;
    }
    var users = {
        findById: function(id){},
        findByUsername: function(username){},
        findByEmail: function(email){},
        authenticate: function(credentials){}
    }
    var connectDB = function(){}
    
    return {
        connect: connectDB,
        Users: users
    }
}
module.exports = DatabaseService;