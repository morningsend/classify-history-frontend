const Mongoose = require("mongoose")


const ImageSchema = new Mongoose.Schema({
    filename: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    tags: {
        type: [String],
        default: []
    },
    url: {
        type: String
    }
})

const Image = Mongoose.model("Image", ImageSchema)
module.exports = Image;