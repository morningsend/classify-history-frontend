import React, { Component } from 'react';

import AppBar from "react-toolbox/lib/app_bar";
import Navigation from "react-toolbox/lib/navigation";
import {Button, IconButton} from "react-toolbox/lib/button";
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox';
import { GridView, Cell } from "../gridview/GridView";

import './style';

export const Container = (props) => {
    const { children, ...rest } = props;
    return <div { ...rest }>{ props.children }</div>
};

export const CollectionViewAppBar = (props) => {
    return <AppBar className="navbar-main">
        <Navigation className="navbar-group">
            <IconButton icon="close" />
        </Navigation>
        <h1 className="navbar-title">Image Collections</h1>
        <Navigation className="navbar-group float-right">
            <IconButton icon="create_new_folder" />
            <IconButton icon="search" />
            <IconButton icon="settings" />
        </Navigation>
    </AppBar>;
}

export const CollectionViewToolBar = (props) => {
    return <AppBar className="navbar-main">
        <Navigation className="navbar-group float-right">
            <span>View Image as</span>
            <IconButton icon="view_list" />
            <IconButton icon="view_comfy" />
        </Navigation>
    </AppBar>
    
}
export const CollectionBottomToolbar = (props) =>{
    return <AppBar className="navbar-bottom">
        <Navigation className="">
            <IconButton icon="file_upload" />
            <IconButton icon="favorite_border" />
            <IconButton icon="edit" />
        </Navigation>
    </AppBar>
}

export const Sidebar = (props) => {
    let style = {};
    if (props.style) style = props.style;
    if (props.autoscroll) style.overflowY = "auto";
    style.flexShrink = 0;
    style.flexGrow=1;
    return (<aside style={style}>
        {props.children}
    </aside>)
}
export const Content = (props) => {
    var { style,...rest } = props;
    if (!props.style) style = {};
    if (props.autoscroll) style.overflowY = "auto";
    return (<section style={style} {...rest}>
        {props.children}
    </section>)
}

export const GridThumbnail = (props)=>{
    const { url,style,className,...rest} = props;
    var thumbStyle = {
        backgroundImage: "url("+url+")",
    }
    return <Cell {...rest} ><div style={thumbStyle} className={className} ></div></Cell>
}
export class CollectionList extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (<List selectable ripple>{this.props.collections.map(this.renderCollectionItem)}</List>);
    }
    renderCollectionItem(collection){
        return <ListItem 
            caption={collection.name}
            leftIcon="folder"
            rightIcon="star_border"
            key={collection.name}
        />
    }
}
export const HorizontalSeparator = (props) => <hr />
export class CollectionView extends Component {
    
    constructor(props){
        super(props);
        this.state = {};
        this.state.collections = [
            {
                name: "new collection (1)",
                images: [
                    {id:1,url:"https://unsplash.it/200/200/"},
                    {id:2,url:"https://unsplash.it/200/200/"},
                    {id:3,url:"https://unsplash.it/200/200/"},
                    {id:4,url:"https://unsplash.it/200/200/"},
                    {id:5,url:"https://unsplash.it/200/200/"},
                    {id:6,url:"https://unsplash.it/200/200/"},
                    {id:7,url:"https://unsplash.it/200/200/"},
                    {id:8,url:"https://unsplash.it/200/200/"},
                    {id:9,url:"https://unsplash.it/200/200/"},
                    {id:10,url:"https://unsplash.it/200/200/"},
                    {id:11,url:"https://unsplash.it/200/200/"}
                ]
            },
            {
                name: "new collection (2)",
                images: [{id:1,url:"https://unsplash.it/200/200/?random&43434"}]
            }
        ];
    }
    render(){
        return(<div className="collection-view-container">
            <CollectionViewAppBar />
            <HorizontalSeparator />
            <CollectionViewToolBar />
            <Container style={{display: "flex"}} className="collection-view-inner">
                <Sidebar component={CollectionList} autoscroll>
                    <CollectionList collections={this.state.collections} />
                </Sidebar>
                <Content autoscroll>
                    <GridView>
                        { 
                            this.state.collections[0].images.map(
                                (image)=><GridThumbnail url={image.url} className="grid-thumbnail" />
                            )
                        }
                    </GridView>
                </Content>
            </Container>
            <CollectionBottomToolbar />
        </div>)
    }
    renderImageView(image){
        var style = {
            backgroundImage: "url("+image.url+")",
            backgroundSize: "cover"
        }
        return <Cell key={image.id}><div style={style} className=""></div></Cell>
    }
}

export default CollectionView;