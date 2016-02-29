import React  from "react";
import AppBar from "react-toolbox/lib/app_bar";
import Navigation from "react-toolbox/lib/navigation";
import {Button, IconButton} from 'react-toolbox/lib/button';
import Link from 'react-toolbox/lib/link';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import Autocomplete from 'react-toolbox/lib/autocomplete';

class FloatingToolbar extends React.Component {
    constructor (props) {
        super(props);
    }
    render() {
        return <div {... this.props}>
            <IconButton icon="undo" />
            <IconButton icon="redo" />
            <IconButton icon="zoom_in" />
            <IconButton icon="zoom_out" />
            <IconButton icon="add_box" />
            <IconButton icon="content_copy" />
            <IconButton icon="content_paste" />
            <IconButton icon="fullscreen" />
            <IconButton icon="screen_rotation" />
        </div>
    }
}

class Slider extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = { collapsed: false};
    }
    _handleCollapse(){
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render () {
        var collapsedStyle={
            transform: "scaleY(0)", 
            display: "none"
        };
        var openStyle={
            transform: "scaleY(1)",
            display: "block"
        };
        var style =this.state.collapsed ? collapsedStyle : openStyle;
        var icon = this.state.collapsed? "keyboard_arrow_down" : "keyboard_arrow_up";
        return <div {...this.props} >
            <div style={style}>
            <ul>
                <li><img src="https://unsplash.it/200/150/?random" /></li>
                <li><img src="https://unsplash.it/200/150/?random" /></li>
                <li><img src="https://unsplash.it/200/150/?random" /></li>
                <li><img src="https://unsplash.it/200/150/?random" /></li>
                <li><img src="https://unsplash.it/200/150/?random" /></li>
                <li><img src="https://unsplash.it/200/150/?random" /></li>
                <li><img src="https://unsplash.it/200/150/?random" /></li>
                <li><img src="https://unsplash.it/200/150/?random" /></li>
                <li><img src="https://unsplash.it/200/150/?random" /></li>
                <li><img src="https://unsplash.it/200/150/?random" /></li>
            </ul>
            </div>
            <div>
                <IconButton icon={icon} inverse onClick={this._handleCollapse.bind(this)} />
            </div>
        </div>
    }
}


class Canvas extends React.Component {
    render() {
        return <div {... this.props}>
            
            </div>;
    }
}

export class AppRoot extends React.Component {
    constructor(props ) {
        super(props);
    }

    _handleLogin() {
        console.log("hehahahah");
    }
    render () {
        
        return <div className="app-container">
                <div className="header">
                <ProgressBar type="linear" mode="indeterminate" className="progress-bar" />
                <AppBar  className="navbar-main">
                    <h1 className="navbar-title">Classify History</h1>
                    <Navigation className="navbar-group">
                        <Link href="" label="My Projects" className="navbar-link" active/>
                        <Link href="" label="Image Collection" className="navbar-link" />
                    </Navigation>
                    <Navigation className="navbar-group float-right" >
                        <Button label="Settings" inverse/>
                        <Button label="Log in" inverse primary onClick={this._handleLogin}/>
                    </Navigation >
                </AppBar>
                <AppBar className="navbar-main">
                    <Navigation className="navbar-group" >
                        <Button label="Edit" icon="edit" inverse/>
                    </Navigation >
                    <Navigation className="navbar-group float-right" >
                        <Button label="shanghai" icon="gavel" inverse/>
                        <Autocomplete
                            direction="right"
                            label="Find Tags"
                            name="countries"
                            onChange={null}
                            source={{"china":"china"}}
                            value="coutr"
                            icon="search"
                            className="tag-search-box"
                        />
                    </Navigation >
                </AppBar>
                <Slider className="slider" />
                </div>
                <Canvas className="canvas" />
                <Button icon="cloud" floating primary className="floating-button" />
                <FloatingToolbar className="floating-toolbar dock-bottom" />
            </div>;
    }
}