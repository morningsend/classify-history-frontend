import React from 'react';
import {Menu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu';
import ClassNames from 'classnames';

import './style.less';

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
        return <div style={position} className={cssClass}> 
            <Menu {...other}  >
                { this.props.children }
            </Menu>
            </div>
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