var express = require("express");
var path = require("path");

var morgan = require("morgan"); // logging requests for debugging purposes
var session = require("express-session");
var cookieParser = require("cookie-parser");
var accountController = require("./controllers/AccountController");

//initialize server
var server = express();

//configurations
var host = process.env.HOST || "127.0.0.1";
var port = process.env.PORT || 3000;

//import all the controllers
var indexController = require("./controllers/IndexController");

//set up express middlewares
//we need session to store 
server.use(session({
        resave: true,
        secret: "touchclassifyclient",
        cookie: {
            loggedIn: false,
            sessionToken: ""
        }
}));

server.use(cookieParser());
//morgan logs every http request, great for debugging
server.use(morgan("dev"));
server.use("/", indexController.router);

server.use(accountController.rootUrl, accountController.router);

//bind server to a port and ip
server.listen(port, host, function(){
    console.log("server running on %s:%d", host, port);
    console.log("__dirname: %s", __dirname);
});