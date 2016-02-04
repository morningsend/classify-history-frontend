var FontIcon = require('material-ui/lib/font-icon');
var React = require("react");
var jquery = require("jquery");

var MaterialIconFactory = function(style){
    
    var iconStyle = jquery.extend({
        fontSize: "1.5em",
        marginRight: "1em"
    }, style);
    return {
            createIcon: function (alias){
            return <FontIcon className="material-icons" style={iconStyle} >{alias}</FontIcon>;
        }
    }
}

module.exports = MaterialIconFactory;