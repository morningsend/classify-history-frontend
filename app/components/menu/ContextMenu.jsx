import React from 'react';
import {Menu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu';
import ClassNames from 'classnames';
import enhanceWithClickOutside from 'react-click-outside';
import './style.less';

if(! document) {
    var document = { addEventListener: function() {} };
}

export class ContextMenu extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        var position = {
            transform: 'translate3d('+this.props.left+'px, '+this.props.top+'px,0)'
        };
        var {className,style, ...other} = this.props;
        var cssClass = ClassNames(className, 'context-menu',{'hidden': !this.props.show });
        return <div style={position} className={cssClass} active={false}> 
            <Menu {...other}  onClick={this._handleClick.bind(this)}>
                { this.props.children }
            </Menu>
            </div>
    }
    componentDidMount() {
    // Hide dropdown block on click outside the block
        window.addEventListener('click', this._hideMenu.bind(this), false); 
    }
    
    
    componentWillUnmount() {
    // Remove click event listener on component unmount
        window.removeEventListener('click', this._hideMenu.bind(this), false);
    }
    _handleClick(e){
        this._hideMenu();
    }
    _hideMenu() {
        //console.log("hide");
        //console.log(this.props.onHide);
        setTimeout(
            ()=>{if(this.props.onHide){
            this.props.onHide()}}, 100);
    }
    
}

export const ThumbnailContextMenu = (props) => {
    return <ContextMenu {...props}>
            <MenuItem value='download' icon='get_app' caption='Download' />
            <MenuItem value='help' icon='favorite' caption='Favorite' />
            <MenuItem value='settings' icon='open_in_browser' caption='Open in app' />
            <MenuDivider />
            <MenuItem value='signout' icon='delete' caption='Delete' disabled />
        </ContextMenu>
}

export default ContextMenu;