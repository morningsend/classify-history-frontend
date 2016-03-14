function DatabaseWrapper()
{
}

DatabaseWrapper.prototype.lookupUserWithPassword = function( username, password, callback )
{
  callback( null );
}

DatabaseWrapper.prototype.lookupUserWithToken = function( token, callback )
{
  callback( null );
}

DatabaseWrapper.prototype.setUserToken = function( user, token )
{
}

DatabaseWrapper.prototype.addImage = function( user, imageFilePath, callback )
{
  callback( null );
}

DatabaseWrapper.prototype.lookupImageWithID = function( id, callback )
{
  callback( null );
}

DatabaseWrapper.prototype.addTag = function( user, imageFilePath, callback )
{
  callback( null );
}

DatabaseWrapper.prototype.addTagToImage = function( image, tag )
{
}

DatabaseWrapper.prototype.lookupImageTags = function( id, callback )
{
  callback( null );
}

DatabaseWrapper.prototype.getTagList = function( callback )
{
  callback( null );
}

DatabaseWrapper.prototype.getImageList = function( callback )
{
  callback( null );
}

module.exports = DatabaseWrapper;
