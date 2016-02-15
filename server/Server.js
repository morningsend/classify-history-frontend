var express = require( 'express' );
var backend = require( './BackEnd.js' );

var app = express();

app.use( '/backend', backend );
app.listen( 8080 );
