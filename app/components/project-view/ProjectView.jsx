import React, { Component, PropTypes } from "react"



export class ProjectView extends Component {
    
    render(){
        return <h1>projects</h1>;
    }
}

ProjectView.propTypes = {
    dispatch: PropTypes.func
}

export default ProjectView