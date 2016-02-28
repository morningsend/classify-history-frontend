var React = require("react");
var MainPage = require("./MainPage");
require('../less/style');

var appTheme= require("../theme/apptheme");

var TouchClassifyAppRoot = React.createClass({
    getInitialState: function() {
        return {
            loggedIn: false,
        };
    },
    
    childContextTypes : {
        muiTheme: React.PropTypes.object,
    },

    getChildContext:function() {
        return {
            muiTheme: appTheme
        };
    },
    componentWillMount: function(){
        
    },
    render : function() {
        //var component = this.state.loggedIn? <DashboardPage></DashboardPage> : <Draggable><div><Login success={this.handleLogginSuccess} /></div></Draggable> ;
        return (<MainPage />);
    },
    handleLogginSuccess: function(event) {
        this.setState({loggedIn: true});
    }
});

module.exports = TouchClassifyAppRoot;