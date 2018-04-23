import React, { Component } from 'react';
import './App.css';
import ToDo from './components/toDo.js';

class App extends Component {

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

    render() {
      return (
        <div className="App">
          <ul>
            <ToDo />
            <ToDo />
          </ul>
        </div>
      );
    }
  }
}

export default App;
