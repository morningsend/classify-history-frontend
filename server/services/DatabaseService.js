var md5 = require("md5");

var DatabaseService = function(options){
    var data = {};
    if (options.useMock){
        data = options.mockData;
    }
    var users = {
        findById: function(id){
            return data.Users[0];
        },
        findByUsername: function(username){
            return data.Users[0];
        },
        findByEmail: function(email){
            return data.Users[0];
        },
        insertUser(user){
            data.Users.append(user);
        }
    }
    var connectDB = function(){}
    
    return {
        connect: connectDB,
        Users: users
    }
}
module.exports = DatabaseService;