const Mongoose = require("mongoose")

const ImageCollection = require("./image-collection")
const Project = require("./project")
const TagCollection = require("./tag-collection")

const UserSchema = new Mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        index: {
            unique: true
        }
    },
    password: {
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true, 
    },
    access: {
        type: Number,
        default: 0,
        min: 0,
        max: 1
    },
    projects: [Project],
    imageCollections: [ImageCollection],
    tags:{
        type: Mongoose.Schema.ObjectId,
        ref: "TagCollection"
    }
});

const User = Mongoose.model("User", UserSchema)
module.exports = User