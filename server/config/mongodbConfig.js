"use strict"
class DbConfig {
    
    constructor(host, port, database){
        this.host = host
        this.port = port
        this.database = database  
    }
    
    getUrlString(){
        return "mongodb://"+this.host+":"+this.port+"/"+this.database;
    }
}

const devConfig = new DbConfig("localhost", "27017", "test");

module.exports = {
    devConfig
}