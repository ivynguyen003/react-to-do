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
      ],
      newTodoDescription:''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if(!this.state.newTodoDescription) { return }
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: ''});
  }

  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value });
  }

  toggleComplete(index) {
    const todos = this.state.todos.slice();//make a copy of the array
    const todo = todos[index]; // assign unique indext to each todo item 
    todo.isCompleted = todo.isCompleted ? false : true;// switch the checkbox
    this.setState({ todos: todos });//Pass new state object 1st todos is a name, 2nd todos is the value,
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.todos.map((todo,index) => //evaluate the code as JS
            <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) }/>
          )}
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) }/>
          <input type="submit" />
        </form>
        </ul>
      </div>
    );
  }
}

export default App;
