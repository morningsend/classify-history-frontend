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
    hexHack.onLogin( request.body.username, request.body.password,
      function( user )
      {
        if( user != null )
        {
          response.cookie( "token", user.token );
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

backend.post( '/upload', upload.single( 'file' ),
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
    console.log( hexHack );
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

backend.get( '/imagelist',
  function( request, response )
  {
    hexHack.fetchImages( request.cookies.token,
      function( images )
      {
        if( images != null )
        {
          response.json({ status : "OK", image : images });
        }
        else
        {
          response.json({ status : "ERROR" });
        }
      }
    );
  }
);

backend.get( '/taglist',
  function( request, response )
  {
    hexHack.fetchTags( request.cookies.token,
      function( tags )
      {
        if( tags != null )
        {
          response.json({ status : "OK", tags : tags });
        }
        else
        {
          response.json({ status : "ERROR" });
        }
      }
    );
  }
);

module.exports = backend;
