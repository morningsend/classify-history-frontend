import React from 'react';
import {Button, IconButton} from 'react-toolbox/lib/button';
import ClassNames from 'classnames';
import './style.less';


export const SliderItem = ({children, ...rest}) => <li {...rest} >{children}</li>

const SliderViewPort = ({children, expanded, className, ...rest}) => {
    var cssClass = ClassNames(
        className,
        {
            "expanded": expanded,
            "collapsed": !expanded
        }
    );
    return <div {...rest} className={cssClass} >
        <ul>
            { children }
        </ul>
    </div>
    
}

SliderViewPort.propTypes = {
   children: React.PropTypes.array.isRequired,
   expanded: React.PropTypes.bool.isRequired  
}

const SliderControls = ({onExpandToggle, onPrevious, onNext, expanded, ...rest}) => {
    let iconType = expanded ? "arrow_drop_up_circle" : "arrow_drop_down_circle";
    return <div {... rest } >
        { expanded ? <IconButton icon="arrow_back" onClick={onPrevious} /> : null }
        <IconButton icon={iconType} onClick={onExpandToggle} />
        { expanded ? <IconButton icon="arrow_forward" onClick={onNext} /> : null }
    </div>
}

const SliderScrollBar = ({...rest}) => {
    return <div className="scrollbar-track" { ...rest } >
            <span className="scrollbar-piece"></span>
        </div>
}

export class Slider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            expanded: true
        };
    }
    
    render(){
        let cssClass = ClassNames(this.props.className, 'slider-wrapper');
        return <div className={cssClass} >
                <SliderViewPort expanded={this.state.expanded} className="viewport" >
                    {this.props.children}
                </SliderViewPort  >
                <SliderScrollBar />
                <SliderControls
                    className="slider-controls" 
                    onExpandToggle={this._handleExpandToggle.bind(this)}
                    onPrevious={this._handlePrevious.bind(this)}
                    onNext={this._handleNext}
                    expanded={this.state.expanded}
                />
            </div>
    }
    _handlePrevious(event){
        console.log(event);
    }
    _handleNext(event){
        
    }
    _handleExpandToggle(event) {
        this.setState({
            expanded : !this.state.expanded
        });
    }
}

export default Slider;