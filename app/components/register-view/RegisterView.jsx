import React, { Component, PropTypes } from "react"
import ReactRouter from "react-router"
import RegisterForm from "./RegisterForm"

export class RegisterView extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    
    render(){
        return <RegisterForm />
    }
}

export default RegisterView;