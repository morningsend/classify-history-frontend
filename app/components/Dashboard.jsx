var React = require("react");
var Card = require("material-ui/lib/card/card");
var CardMedia = require("material-ui/lib/card/card-media");
var CardTitle = require("material-ui/lib/card/card-title");
var CardHeader = require("material-ui/lib/card/card-header");
var Dashboard = React.createClass({
    displayName: "Dashboard",
    
    render : function(){
        var imgCaption = <CardTitle title="random image" subtitle="https://unsplash.it" />;
        var style = {
            width: "300px",
            height: "200px",
            
        }
        return (<div style={style}>
            <Card>
                <CardHeader title="c"/>
                <CardMedia overlay={imgCaption}>
                    <img src="https://unsplash.it/400/300/?random" />
                </CardMedia>
            </Card>
        </div>);
    }
});

module.exports = Dashboard;