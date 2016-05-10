"use strict"
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const path = require("path")
const dbconfig = require("./config/mongodbConfig").devConfig
const serverConfig = require("./config/serverConfig").devConfig

console.log("connecting to db at: " + dbconfig.getUrlString())

var dbConnection = mongoose.createConnection(
    dbconfig.getUrlString(),
    (err) => {
        if(err){
            console.log("error connecting to database,...exiting")
            console.log(err)
            process.exit()
        }else{
            console.log("successfully connected to db")
        }
    })

let server = express()

server.use(bodyParser.urlencoded({ extended: true}))
server.use(bodyParser.json())
server.use(express.static(path.resolve(__dirname, "public")))

server.listen(serverConfig.port, serverConfig.host, function(a,b){
    console.log("server started")
    console.log(`listening on ${serverConfig.host}:${serverConfig.port}` )
})