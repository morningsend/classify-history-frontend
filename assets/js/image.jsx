import React from "react";

export class Image extends React.Component{
    constructor(props){
        super(props);
        this.state = {url: props.url};
    }
    render(){
        return (<img url ={this.state.url} />);
    }
}
Image.propTypes = { url: React.PropTypes.string};
Image.defaultProps = {url: "http://www.lausd.k12.ca.us/Fleming_MS/students/Computer_Geek_Squad/elena/Elena/Graphics/white-tiger-0001.jpg"};