const User = require("./schema/user")
const Project = require("./schema/project")
const Image = require("./schema/image")
const ImageCollection = require("./schema/image-collection")
const Mongoose = require("mongoose")

function loadMockData(){
    Mongoose.connection.db.dropDatabase()
    var user = new User({
        
    })
    user.save()
}

module.exports = loadMockData;