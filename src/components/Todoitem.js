import React, { Component } from "react";
import PropTypes from "prop-types";
import "./w3.css";

class Todoitem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      barderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id, completed)}// OR () => this.props.markComplete(this, id, completed)
          />{" "}
          {title}
          <button
            onClick={this.props.delTodo.bind(this, id)}
            className="w3-button w3-circle w3-right w3-card w3-red w3-small"
            style={{ outline: "none" }}
          >
            X
          </button>
        </p>
      </div>
    );
  }
}
//proptypes
Todoitem.propTpes = {
  todo: PropTypes.object.isRequired,
};

export default Todoitem;
