const express = require("express")
const User = require("../schema/user")
var router = express.Router()

function registerUser(username, password, email){
    
}

router.get("/create",(request, response)=>{
    response.status(200).json({
        ack: 1,
        message: "inside create user route handler"
    })
    //User.findOne({email}).exec().then()
})

module.exports = router