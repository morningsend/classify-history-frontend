const Mongoose = require("mongoose")

const TagSchema = Mongoose.Schema({
    text: {
        type:String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
})

const Tag = Mongoose.model("Tag", TagSchema)

module.exports = Tag;