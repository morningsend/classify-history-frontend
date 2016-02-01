var express = require("express");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var path = require("path");

var server = express();

//configurations
var host = process.env.HOST || "127.0.0.1";
var port = process.env.PORT || 3000;

var indexRoute = {
    path: "/",
    method: "get",
    handler: function(request, response) {
        response.end("index.html");
    }  
};

function configureRoute(router, config){
    router[config.method](config.path, config.handler);
}

var staticConfig = {
    index: "index.html",
    maxAge: 60000
}

var apiRouter = express.Router();
var homeRouter = express.Router();

configureRoute(homeRouter, indexRoute);
server.use(express.static(path.resolve(__dirname, "../app"), staticConfig));
server.use(cookieParser());
server.use(session({
        resave: true,
        secret: "touchclassifyclient",
        cookie: {
            loggedIn: false,
            sessionToken: ""
        }
}));
server.use("/", router);
server.listen(port, host);

console.log("server running on %s:%d", host, port);
console.log("__dirname: %s", __dirname);