"use strict"

class ServerConfig {
    constructor(host, port){
        this.host = host
        this.port = port
    }
}

const devConfig = new ServerConfig("localhost", "3000")

module.exports = {
    devConfig
}