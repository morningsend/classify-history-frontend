const Mongoose = require("mongoose")
const User = require("./user")
const crypto = require("crypto")

const TOKEN_LENGTH = 32
const DEFAULT_EXPIRY_PERIOD = 60*60*24

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
    },
    expired: {
        type: Boolean,
        default: false,
        required: true
    }
})

const AccessToken = Mongoose.model("AccessToken", AccessTokenSchema)

AccessTokenSchema.methods.setExpired = (callback) => {
    this.expired = true
    this.save(callback)
}
AccessTokenSchema.methods.isExpired = () => {
    if(this.expiresOn <= Date.now)
        return true
    else 
        return false
}
AccessTokenSchema.statics.createTokenForUser = (user, expirePeriodInSeconds) => {
    var promise = new Promise(function(resolve, reject){
        if(!user || !(user instanceof User)){
            reject(new TypeError("parameter is not of type User"))
        }else{
            const buf = crypto.randomBytes(TOKEN_LENGTH)
            var expiryPeriod = parseInt(expirePeriodInSeconds) || DEFAULT_EXPIRY_PERIOD
            var expiry = Date.now();
            expiry = expiry.setSeconds(expiry.getSeconds()+expiryPeriod)
            
            var accessToken = new AccessToken({
                token: buf.toString('hex'),
                expiresOn: expiry,
                authenUser: user.id,
                expired: false
            })
            resolve(accessToken)
        }
    })
    return promise
}

module.exports = AccessToken