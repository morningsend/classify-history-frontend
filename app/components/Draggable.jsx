
var React = require("react");
var Hammer = require("hammerjs");
var ReactDOM = require("react-dom");
var Draggable = React.createClass({
    getInitialState: function(){
        
        return {
            deltaX: 0,
            deltaY: 0,
            dragStartX: 0,
            dragStartY: 0,
            scaleX: 1.0,
            scaleY: 1.0,
            rotate: 0
        };
    },

    componentDidMount: function() {
        var self = this;
        var options = {
            direction: Hammer.DIRECTION_ALL
        };
        var hammerEl = new Hammer(this.getDOMNode(), options);
        hammerEl.on("pan", function(ev){
            //console.log(ev);
            self.setState({
                deltaX: ev.deltaX,
                deltaY: ev.deltaY
            });
        })
        .on("panstart", function(ev){
            console.log(ev);
        });
    },
    componentWillUnmount: function(){
        hammerTime.off("pan");
    },
    handlePan: function(ev){
        
    },
    render: function(){
        //console.log(this);
        var style = {
            //transition: "all 0.5s ease-in-out",
            transform: "translate("+this.state.deltaX+"px," + this.state.deltaY+"px)", 
        };
        return <div style={style}>{this.props.children}</div>;
    }
});

module.exports = Draggable;