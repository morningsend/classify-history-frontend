var express = require( 'express' );
var backend = require( './BackEnd.js' );

var app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Cache-Control');

    next();
}

app.use( allowCrossDomain );
app.use( '/backend', backend );
app.listen( 8080 );
