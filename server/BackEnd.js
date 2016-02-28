var express      = require( 'express' );
var bodyParser   = require( 'body-parser' );
var cookieParser = require( 'cookie-parser' );
var multer       = require( 'multer' );
var HexHack      = require( './HexHack.js' );
var MySQLWrapper = require( './MySQLWrapper.js' );
var settings     = require( './Settings.js' );
var backend      = express.Router();

var storage = multer.diskStorage(
  {
    destination : function( request, file, cb )
    {
      cb( null, settings.uploaddir );
    },
    filename : function( request, file, cb )
    {
      cb( null, file.fieldname + '-' + Date.now() + '-' + file.originalname );
    }
  }
);

var upload = multer( { storage : storage } );

var hexHack = new HexHack( new MySQLWrapper(
    settings.host, settings.user, settings.password, settings.schema
  )
);

backend.use( bodyParser.urlencoded( { extended : true } ) );
backend.use( cookieParser() );

backend.post( '/login',
  function( request, response )
  {
    response.header("Access-Control-Allow-Origin", "*");
    hexHack.onLogin( request.body.username, request.body.password,
      function( user )
      {
        if( user != null )
        {
          response.cookie( "token", user.token );
          response.json( { status : "OK", token : user.token } );
        }
        else
        {
          response.json( { status : "ERROR" } );
        }
      }
    );
  }
);

backend.post( '/createtag',
  function( request, response )
  {
    hexHack.onCreateTag( request.cookies.token, request.body.tagname,
      function( id )
      {
        if( id != null )
        {
          response.json( { status : "OK", id : id } );
        }
        else
        {
          response.json( { status : "ERROR" } );
        }
      }
    );
  }
);

backend.post( '/upload', upload.single( 'image' ),
  function( request, response )
  {
    hexHack.onInsertImage( request.cookies.token, request.file.path,
      function( id )
      {
        if( id != null )
        {
          response.json( { status : "OK", id : id } );
        }
        else
        {
          response.json( { status : "ERROR" } );
        }
      }
    );
  }
);

backend.post( '/tagimage',
  function( request, response )
  {
    hexHack.tagImage( request.cookies.token, request.body.imageid, request.body.tagid,
      function( status )
      {
        if( status != null )
        {
          response.json( { status : "OK" } );
        }
        else
        {
          response.json( { status : "ERROR" } );
        }
      }
    );
  }
);

backend.get( '/image',
  function( request, response )
  {
    hexHack.fetchImage( request.cookies.token, request.query.id,
      function( image )
      {
        if( image != null )
        {
          response.sendFile( image.path );
        }
        else
        {
          response.json( { status : "ERROR" } );
        }
      }
    );
  }
);

module.exports = backend;
