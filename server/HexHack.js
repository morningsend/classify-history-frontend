var md5 = require( 'md5' );

function HexHack( dbWrapper )
{
  this.db = dbWrapper;
  console.log( "Construct hexhack" );
}

HexHack.prototype.onLogin = function( username, password, callback )
{
  console.log( "onLogin" );
  this.db.lookupUserWithPassword( username, md5( password ),
    function( user )
    {
      if( user != null )
      {
        user.setToken(
          md5( password + username + new Date() + Math.random() )
        );

        callback( user );
      }
      else
      {
        callback( null );
      }
    }
  );
}

HexHack.prototype.onCreateTag = function( token, tagName, callback )
{
  console.log( "onCreateTag" );
  var self = this;
  this.db.lookupUserWithToken( token,
    function( user )
    {
      if( user != null )
      {
        self.db.addTag( user, tagName, callback );
      }
      else
      {
        callback( null );
      }
    }
  );
}

HexHack.prototype.onInsertImage = function( token, path, callback )
{
  console.log( "onInsertImage" );
  var self = this;
  this.db.lookupUserWithToken( token,
    function( user )
    {
      if( user != null )
      {
        self.db.addImage( user, path, callback );
      }
      else
      {
        callback( null );
      }
    }
  );
}

HexHack.prototype.fetchImage = function( token, id, callback )
{
  console.log( "fetchImage" );
  var self = this;
  this.db.lookupUserWithToken( token,
    function( user )
    {
      if( user != null )
      {
        self.db.lookupImageWithID( id, callback );
      }
      else
      {
        callback( null );
      }
    }
  );
}

HexHack.prototype.tagImage = function( token, imageID, tagID, callback )
{
  console.log( "tagImage" );
  var self = this;
  this.db.lookupUserWithToken( token,
    function( user )
    {
      if( user != null )
      {
        self.db.addTagToImage( imageID, tagID, callback );
      }
      else
      {
        callback( null );
      }
    }
  );
}

HexHack.prototype.fetchTags = function( token, callback )
{
  console.log( "fetchTags" );
  var self = this;
  this.db.lookupUserWithToken( token,
    function( user )
    {
      self.db.getTagList( callback );
      /*if( user != null )
      {
        self.db.getTagList( callback );
      }
      else
      {
        callback( null );
      }*/
    }
  );
}

HexHack.prototype.fetchImages = function( token, callback )
{
  console.log( "fetchImages" );
  var self = this;
  this.db.lookupUserWithToken( token,
    function( user )
    {
      self.db.getImageList( callback );
      /*if( user != null )
      {
        self.db.getImageList( callback );
      }
      else
      {
        console.log( "user is null" );
        callback( null );
      }*/
    }
  );
}

module.exports = HexHack;
