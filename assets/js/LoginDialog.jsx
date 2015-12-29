'use strict';

var React = require('react');
var Dialog = require('./Dialog');

var LoginDialog = React.createClass({

	getInitialState: function() {
		var state = {
			username: "",
			password: "",
		};
		return state;	
	},

	render : function() {
		return (<Dialog>
				<div>
					<input type='username' size='30' placeholder='Username' value={this.state.username} onChange={this.usernameFieldChanged}/>
					<input type='password' size='30' placeholder='password' value={this.state.password} onChange={this.passwordFieldChange}/>
				</div>

				<div>
					<button type='submit' >Log in</button>
					<button>Cancel</button>
					<a href="#">Forgot password?</a>
				</div>
			</Dialog>);
	},
	usernameFieldChanged : function(event) {
		var newState = {
			username: event.target.value,
			password: this.state.password
		}
		this.setState(newState);
	},
	passwordFieldChange: function(event) {
		var newState = {
			username: this.state.username,
			password: event.target.value
		}
		this.setState(newState);
	}
});

module.exports = LoginDialog;