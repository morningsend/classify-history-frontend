var React = require("react");
var SinglePageContainer = React.createClass({
    
    render: function(){
        return (<div className={"single-page-container root-container"} >{this.props.children}</div>);
    }
});

module.exports = SinglePageContainer;