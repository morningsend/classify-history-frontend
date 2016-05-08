import React, { Component } from 'react';
import Dialog from "react-toolbox/lib/dialog";
import Button from "react-toolbox/lib/button";
import Input from "react-toolbox/lib/input";
import AutoComplete from "react-toolbox/lib/autocomplete";


export class TagsView extends Component {
    
    constructor(props){
        super(props)
    }
    render(){
        return <Dialog 
                    active={this.props.active}
                    onOverlayClick={this._handleCancel.bind(this)} >
            <AutoComplete 
                source={this.props.availableTags}
                value={this.props.selectedTags}
                direction="auto"
                label="search tags"
                onChange={this.props.onChange}
            />
        </Dialog>
    }
    _handleCancel(){
        this.props.onCancel? this.props.onCancel(): null;
    }
}

TagsView.propTypes = {
    availableTags: React.PropTypes.object,
    selectedTags: React.PropTypes.array
}

export default TagsView;