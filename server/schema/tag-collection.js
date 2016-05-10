const Mongoose = require("mongoose")
const Tag = require("./tag")

const TagCollectionSchema = Mongoose.Schema({
    created: {
        type: Date,
        default: Date.now
    },
    tags: [String]
})

const TagCollection = Mongoose.model("TagCollection", TagCollectionSchema)

module.exports = TagCollection;