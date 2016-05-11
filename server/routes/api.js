const requestTokenRouter = require("./request-token")
const userRouter = require("./user")
const express = require("express")
const ApiRouter = express.Router()

ApiRouter.use("/requesttoken",requestTokenRouter)
ApiRouter.use("/user", userRouter)
module.exports = ApiRouter
