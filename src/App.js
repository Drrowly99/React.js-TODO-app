import "./App.css";
import React, { Component } from "react";
import Todos from "./components/Todos";

class App extends Component {
  constructor(props){
    super(props)
  this.state = {
    todos: [
      {
        id: 1,
        title: "hit me",
        completed: false,
      },
      {
        id: 2,
        title: "hit her",
        completed: true,
      },
      {
        id: 3,
        title: "hit them",
        completed: false,
      },
    ],
  };
}
  markComplete = (id, completed) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !completed;
        }
        return todo;
      }),
    });
  };
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  render() {
    return (
      <div className="App">
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
