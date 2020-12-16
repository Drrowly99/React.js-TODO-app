import React, { Component } from "react";
import Todoitem from "./Todoitem";
import PropTypes from "prop-types";
class Todos extends Component {

  render() {
    return this.props.todos.map((todo, index) => (
      <Todoitem key={index} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
    ));
  }
}

Todos.propTpes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;
