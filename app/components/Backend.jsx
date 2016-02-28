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
  }
};

module.exports = Backend;
