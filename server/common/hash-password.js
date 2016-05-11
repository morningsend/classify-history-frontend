const crypto = require("crypto")
var config = {
    hashBytes: 256,
    saltBytes: 128,
    iterations: 1024,
    digest: "sha256"
}
/*
    callback(error, result)
 */
function hashPassword(password){
    return getSalt(config.saltBytes).then( (salt) => calculateHash(password, salt) )
}

function calculateHash(password,salt){
    var promise = new Promise((resolve, reject) => {
        crypto.pbkdf2(password, salt, config.iterations, config.hashBytes,(error, hash)=>{
            if(error) reject(error)
            else
                resolve({
                    password_hash: hash,
                    password_salt: salt
                })
        })
    })
    return promise
}

function getSalt(length){
    var promise = new Promise((resolve, reject) => {
        crypto.randomBytes(length, (error, buffer) => {
            if(error){
                reject(error)
            }else {
                resolve(buffer)
            }
        })
    })
    return promise
}
function compareBuffer(buffer1, buffer2){
    return buffer1.equals(buffer2)
}
function verifyPassword(password, password_hash, password_salt){
    return calculateHash(password,password_salt).then((hash)=>
        Promise.resolve(compareBuffer(hash, password_hash)))
}
var exports = module.exports
exports.getSalt = getSalt
exports.hashPassword = hashPassword
exports.calculateHash = calculateHash
exports.verifyPassword = verifyPassword