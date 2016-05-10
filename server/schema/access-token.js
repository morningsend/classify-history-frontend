const Mongoose = require("mongoose")
const User = require("./user")

const AccessTokenSchema = Mongoose.Schema({
    token: {
        type:String,
        required: true
    },
    expiresOn: {
        type: Date,
        required: true
    },
    authenUser: {
        type: Mongoose.Schema.ObjectId,
        ref: "User"
    }
})

const AccessToken = Mongoose.model("AccessToken", AccessTokenSchema)
module.exports = AccessToken