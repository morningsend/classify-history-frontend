const Mongoose = require("mongoose")
const Image = require("./image")

const ImageCollectionSchema = Mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    owner:{
        type: Mongoose.Schema.ObjectId,
        ref: "User"
    },
    created: {
        type: Date,
        default: Date.now
    },
    modified: {
        type: Date,
        default: Date.now
    },
    images:{
        type: [Image]
    }
})

const ImageCollection = Mongoose.model("ImageCollection", ImageCollectionSchema)

module.exports = ImageCollection