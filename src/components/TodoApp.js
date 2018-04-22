import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "../actions/actions";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

class TodoApp extends Component {
  render() {
    return (
      <div>
        <AddTodo
          handleSubmit={e => {
            e.preventDefault();
            const value = e.target.add.value.trim();
            if (!value) return;
            this.props.addTodo(value);
            e.target.add.value = "";
          }}
        />
        <TodoList
          todos={this.props.todos}
          onTodoClick={id => {
            this.props.toggleTodo(id);
          }}
        />
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
