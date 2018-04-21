import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "../actions/actions";

class TodoApp extends Component {
  render() {
    return (
      <div>
        <input ref={node => (this.input = node)} />
        <button
          onClick={() => {
            this.props.addTodo(this.input.value);
            this.input.value = "";
          }}
        >
          Add Todo
        </button>
        <ul>
          {this.props.todos.map(todo => (
            <li
              onClick={() => {
                this.props.toggleTodo(todo.id);
              }}
              style={{
                textDecoration: todo.completed ? "line-through" : "none"
              }}
              key={todo.id}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  addTodo: val => dispatch(addTodo(val)),
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
