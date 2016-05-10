const Mongoose = require("mongoose")
const ProjectSchema = Mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    created: {
        type: Date,
        default: Date.now
    },
    modified: {
        type: Date,
        default: Date.now
    },
})

const Project = Mongoose.model("Project", ProjectSchema)
module.exports = Project 