var React = require("react");

 var Dialog = React.createClass({

	getInitialState: function() {
		return {
			showOverlay : this.props.modal && this.props.modal=="true"
		};
	},

	render: function(){
		var styles = {
			width: '300px',
			height: '200px',
			color: '#ccc',
			padding: '20px',
			backgroundColor: '#999'
		};
		var overlayStyle = {
			width: '100%',
			minHeight: '100%'

		};
		
		return (<div className="dialog-modal-overlay" style={overlayStyle}> 
			<div className="dialog-wrapper" style={styles} >
				<i>This is in the dialog</i>
					{this.props.children}
			</div>
		</div>);
	},
});

 module.exports = Dialog;