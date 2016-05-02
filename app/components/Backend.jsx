import $ from 'jquery';
//import Promise from 'promise';

var Backend = function( backendURL )
{
  this.login = function( username, password )
  {
    return new Promise(
      function( resolve, reject )
      {
        $.post( backendURL + "/backend/login",
          {
            username: username, password: password
          },
          function( data )
          {
            if( (data.status != null) && (data.status == "OK") )
            {
              resolve( data );
            }
            else
            {
              reject( data );
            }
          }
        );
      }
    );
  };

  this.createTag = function( tagName )
  {
    return new Promise(
      function( resolve, reject )
      {
        $.post( backendURL + "/backend/login", { tagname: tagName },
          function( data )
          {
            if( data.status == "OK" )
            {
              resolve( data );
            }
            else
            {
              reject( data );
            }
          }
        );
      }
    );
  };

  this.tagImage = function( imageID, tagID )
  {
    return new Promise(
      function( resolve, reject )
      {
        $.post( backendURL + "/backend/login", { imageid: imageID, tagid: tagID },
          function( data )
          {
            if( data.status == "OK" )
            {
              resolve( data );
            }
            else
            {
              reject( data );
            }
          }
        );
      }
    );
  }

  this.getImageURL = function( imageID )
  {
    //return backendURL + "/backend/image?id=" + imageID;
    return 
  }

  this.getImageUploadURL = function()
  {
    return backendURL + "/backend/upload";
  }

  this.getImageList = function()
  {
    return new Promise(
      function( resolve, reject )
      {
        $.get( backendURL + "/backend/imagelist", {},
          function( data )
          {
            if( data.status == "OK" )
            {
              resolve( data );
            }
            else
            {
              reject( data );
            }
          }
        );
      }
    );
  }

  this.getTagList = function()
  {
    return new Promise(
      function( resolve, reject )
      {
        $.get( backendURL + "/backend/taglist", {},
          function( data )
          {
            if( data.status == "OK" )
            {
              resolve( data );
            }
            else
            {
              reject( data );
            }
          }
        );
      }
    );
  }
};

module.exports = Backend;
