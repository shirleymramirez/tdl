import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Cook Dinner",
        completed: false
      },
      {
        id: 2,
        title: "Do the laundry",
        completed: true
      },
      {
        id: 3,
        title: "Fold clean clothes",
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id )]})
  }

  render() {
    return (
      <div>
        <Todos 
          todos={this.state.todos} 
          markComplete={this.markComplete}
          delTodo={this.delTodo}/>
      </div>
    )
  }
}

export default App;
