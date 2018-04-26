import React, { Component } from 'react';


class ToDo extends Component { //is component a reset name in react?
  render(){
  	return (
  		<li>
  			<input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
  			<span>{ this.props.description }</span>
  			<button onClick={ this.props.deleteTodo }>Done</button>
  		</li>

  	);
  }
}

export default ToDo;