"use strict"
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const path = require("path")
const dbconfig = require("./config/mongodbConfig").devConfig
const serverConfig = require("./config/serverConfig").devConfig
const multer = require("multer")
const apiRouter = require("./routes/api")
const loadMockData = require("./mockdata")
console.log("connecting to db at: " + dbconfig.getUrlString())

mongoose.connect(
    dbconfig.getUrlString(),
    (err) => {
        if(err){
            console.log("error connecting to database,...exiting")
            console.log(err)
            process.exit(-1)
        }else{
            console.log("successfully connected to db")
            loadMockData()
        }
    })
var uploadConfig = {
    dest: path.resolve(__dirname, "public/upload"),
    limits: {
        fileSize: 1024*1024, 
        files: 1
    }
}



var uploadMiddleWare = multer(uploadConfig)

let server = express()

server.use(bodyParser.urlencoded({ extended: true}))
server.use(bodyParser.json())
server.use(express.static(path.resolve(__dirname, "../app/build")))
server.use(express.static(path.resolve(__dirname, "public")))
server.use("/api",apiRouter)
server.listen(serverConfig.port, serverConfig.host, () => {
    console.log("server started")
    console.log(`listening on ${serverConfig.host}:${serverConfig.port}` )
})