var mysql = require('mysql');
var DatabaseWrapper = require('./DatabaseWrapper.js')

function MySQLWrapper( host, user, password, database )
{
  this.connection = mysql.createConnection
  (
    {
      host     : host,
      user     : user,
      password : password,
      database : database
    }
  );

  this.connection.connect();
}

MySQLWrapper.prototype = new DatabaseWrapper();

MySQLWrapper.prototype.lookupUserWithPassword = function( username, password, callback )
{
  var self = this;

  this.connection.query
  (
    'select * from Users where username=? and password=? limit 1;',
    [ username, password ],
    function( error, rows, fields )
    {
      if( !error && ( rows.length == 1 ) )
      {
        rows[ 0 ].setToken = function( token )
        {
          self.setUserToken( rows[ 0 ], token );
          rows[ 0 ].token = token;
        }

        callback( rows[ 0 ] );
      }
      else
      {
        callback( null );
      }
    }
  );
}

MySQLWrapper.prototype.lookupUserWithToken = function( token, callback )
{
  var self = this;

  this.connection.query
  (
    'select * from Users where token=? limit 1;',
    [ token ],
    function( error, rows, fields )
    {
      if( !error && ( rows.length == 1 ) )
      {
        rows[ 0 ].setToken = function( token )
        {
          self.setUserToken( rows[ 0 ], token );
        }

        callback( rows[ 0 ] );
      }
      else
      {
        callback( null );
      }
    }
  );
}

MySQLWrapper.prototype.setUserToken = function( user, token )
{
  this.connection.query
  (
    'update Users set token=? where id=?',
    [ token, user.id ]
  );
}

MySQLWrapper.prototype.addImage = function( user, imageFilePath, callback )
{
  this.connection.query
  (
    'insert into Images ( path ) values ( ? );',
    [ imageFilePath ],
    function( error, result )
    {
      if( !error )
      {
        callback( result.insertId );
      }
      else
      {
        callback( null );
      }
    }
  );
}

MySQLWrapper.prototype.lookupImageWithID = function( id, callback )
{
  var self = this;

  this.connection.query
  (
    'select * from Images where id = ? limit 1;',
    [ id ],
    function( error, result, fields )
    {
      if( !error && ( result.length == 1 ) )
      {
        result[ 0 ].getTags = function( callback )
        {
          self.lookupImageTags( result[ 0 ].id, callback );
        }

        callback( result[ 0 ] );
      }
      else
      {
        callback( null );
      }
    }
  );
}

MySQLWrapper.prototype.addTag = function( user, tag, callback )
{
  this.connection.query
  (
    'insert into Tags ( name ) values ( ? );',
    [ tag ],
    function( error, result )
    {
      if( !error )
      {
        callback( result.insertId );
      }
      else
      {
        callback( null );
        console.log( error );
      }
    }
  );
}

MySQLWrapper.prototype.addTagToImage = function( imageID, tagID, callback )
{
  this.connection.query
  (
    'insert into Images_has_Tags ( Image_id, Tag_id ) values ( ?, ? );',
    [ imageID, tagID ],
    function( error )
    {
      if( !error )
      {
        callback( true );
      }
      else
      {
        callback( null );
      }
    }
  );
}

MySQLWrapper.prototype.lookupImageTags = function( id, callback )
{
  this.connection.query
  (
    'select Tags.id, Tags.name from Images_has_Tags inner join Tags on Images_has_Tags.Tag_id = Tags.id where Images_has_Tags.Image_id=?;',
    [ id ],
    function( error, result, fields )
    {
      if( !error && ( result.length > 0 ) )
      {
        callback( result );
      }
      else
      {
        callback( null );
      }
    }
  );
}

module.exports = MySQLWrapper;
