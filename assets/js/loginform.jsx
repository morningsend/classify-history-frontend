var React = require("react");

var loginFormClass = React.createClass({
    displayName: "LoginForm",
    render: function(){
        return (<form action="/login" method="POST">
                <input name="username"  type="text" placeholder="Enter User Name" />
                <input name="password" type="password" placeholder = "Enter Password" />
                <button class="btn btn-default" id="login-btn" type="submit">Comfirm</button>
                <button class="btn btn-light" id="cancel-btn" type="cancel">Cancel</button>
            </form>);
    },
    getInitialState: function(){
        return { display: "block"}        
    }
});

module.exports = loginFormClass;