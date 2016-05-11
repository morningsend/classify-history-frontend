const Mongoose = require("mongoose")

const ImageCollection = require("./image-collection")
const Project = require("./project")
const TagCollection = require("./tag-collection")
const hashPass = require("../common/hash-password")

const UserSchema = new Mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        index: {
            unique: true
        }
    },
    passwordHash: {
        type:Buffer,
        required: true
    },
    passwordSalt: {
        type:Buffer,
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

UserSchema
    .virtual("password")
    .set(passtext=>{
        hashPass.hashPassword(passtext).then(hashSalt =>{
            const {hash, salt} = hashSalt
            this.set("passwordHash",hash)
            this.set("passwordSalt", salt)
        })
    })

const User = Mongoose.model("User", UserSchema)
module.exports = User