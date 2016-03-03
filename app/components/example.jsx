import React, { PropTypes } from 'react'

const Example = React.createClass({
  constructor(){
    // super();
    this.state = {
      txt: 'this is the state txt',
      cat : 0
    }
  }
  update(e){
    this.setState({txt:e.target.value})
  }
  render () {
    return (
      <div>
        <input type= 'text' onchange ={this.update.bind(this)}></input>
      </div>
      <h1> this is the text</h1>
    )
  }
})

export default Example
