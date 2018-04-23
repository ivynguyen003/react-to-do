import React, { Component } from 'react';


class ToDo extends Component { //is component a reset name in react?
  render(){
  	return (
  		<li>
  			<input type="checkbox" checked={ this.props.isCompleted } />
  			<span>{ this.props.description }</span>
  		</li>

  	);
  }
}

export default ToDo;