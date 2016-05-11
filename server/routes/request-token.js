const express = require("express")
const router = express.Router()
const User = require("../schema/user")
const AccessToken = require("../schema/access-token")

function getUserToken(username, password){
    
}

router.get("/", function(request, response){
    var username = request.query.username,
        password = request.query.password;

    if(!username || !password ){
        response.status(400).json({
            message: "wrong username/password combination"
        });
    }else{
        User.findOne({username, password})
            .then((user)=>{
                if(user){
                    return AccessToken.createTokenForUser(user)
                }else{
                    return new Promise.reject(new Error("no user found"))
                }
            })
            .then((accessToken)=>response.json({
                status: 200,
                token: accessToken.token,
                expires: accessToken.expiresOn
            })).catch((error)=>{
                response.status(401).json({
                    message: "wrong username/password combination"
                })
            })
    }
})

module.exports = router;