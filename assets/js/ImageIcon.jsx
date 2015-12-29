var React = require('react');

var ImageIcon = React.createClass({
	

	render: function() {
		
		return (
			<div>
				<div ><img width={ this.props.width } height={ this.props.height} src={this.props.url} /> </div>
				<div><h5>Filename.jpg</h5></div>
			</div>
			);
	},
});

module.exports = ImageIcon;