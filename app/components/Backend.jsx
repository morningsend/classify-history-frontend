var $ = require( "jquery" );

var Backend = function( backendURL )
{
  this.login = function( username, password, onSuccess, onFailure )
  {
    $.post( backendURL + "/backend/login",
      {
        username: username, password: password
      },
      function( data )
      {
        if( data.status == "OK" )
        {
          onSuccess();
        }
        else
        {
          onFailure();
        }
      }
    );
  };

  this.createTag = function( tagName, onSuccess, onFailure )
  {
    $.post( backendURL + "/backend/login", { tagname: tagName },
      function( data )
      {
        if( data.status == "OK" )
        {
          onSuccess( data.id );
        }
        else
        {
          onFailure();
        }
      }
    );
  };

  this.tagImage = function( imageID, tagID, onSuccess, onFailure )
  {
    $.post( backendURL + "/backend/login", { imageid: imageID, tagid: tagID },
      function( data )
      {
        if( data.status == "OK" )
        {
          onSuccess();
        }
        else
        {
          onFailure();
        }
      }
    );
  };
};

module.exports = Backend;
