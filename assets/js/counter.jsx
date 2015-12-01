var React = require("react");

var counter = React.createClass({
    increment: function(){
        this.setState({
           count:(this.state.count+1)%10, 
        });
    },
    getInitialState: function(){
        return {
            count: 0
        }
    },
    render: function(){
       return (
           <div class="wrapper">
            <h1>{this.state.count}</h1>
            <button type="button" onClick={this.increment} >Click!</button>
           </div>
       );
   } ,
});

module.exports=counter;