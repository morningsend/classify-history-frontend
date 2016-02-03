var React = require("react");
var GridList = require("material-ui/lib/grid-list/grid-list");
var GridTile = require("material-ui/lib/grid-list/grid-tile");

var ResponsiveImageGrid = React.createClass({
    getInitialState: function(){
        return {
            columns: 3
        };
    },
    componentWillMount: function() {
        
    },
    componentDidMount: function(){
        window.addEventListener("resize", this.updateGridDimension);
    },
    componentWillUnmount: function() {
        window.removeEventListener("resize", this.updateGridDimension);
    }
    render: function() {
        return <GridList ref="gridContainer" cols={this.state.columns}>
            {
                this.props.imageUrls.map(function(imageUrl){
                    return <GridTile cols={1}} rows={1} key={imageUrl} title="Image" >
                                <img src={imageUrl} />
                            </GridTile>;
                });
            }
        </GridList>
    },
    updateGridDimension: function(event){
        var grid = this.refs.gridContainer;
        var gridRect = grid.getBoundingClientRect();
        console.log(event);
        
    }
    
});