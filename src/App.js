import React, { Component } from 'react';
import './App.css';
import ToDo from './components/toDo.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      todos:[
        { description:'Walk the dog', isCompleted: true},
        { description:'Eat Breakfast', isCompleted: false },
        { description:'Water lawn', isCompleted: false }
      ]
    };
  }

  toggleComplete(index) {
    console.log(index);
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.todos.map((todo,index) => //evaluate the code as JS
            <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) }/>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
