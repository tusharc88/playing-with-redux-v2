import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo, setVisibilityFilter } from "../actions/actions";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Filters from "./Filters";
import "../main.css";

class TodoApp extends Component {
  getFilteredTodos = ({ filter, todos }) => {
    switch (filter) {
      case "ALL":
        return todos;
      case "ACTIVE":
        return todos.filter(todo => todo.completed === false);
      case "COMPLETED":
        return todos.filter(todo => todo.completed === true);
      default:
        return todos;
    }
  };

  render() {
    const {
      visibilityFilter,
      todos,
      addTodo,
      toggleTodo,
      setVisibilityFilter
    } = this.props;

    const visibleTodos = this.getFilteredTodos({
      filter: visibilityFilter,
      todos: todos
    });

    return (
      <div>
        <AddTodo
          handleSubmit={e => {
            e.preventDefault();
            const value = e.target.add.value.trim();
            if (!value) return;
            addTodo(value);
            e.target.add.value = "";
          }}
        />
        <TodoList
          todos={visibleTodos}
          onTodoClick={id => {
            toggleTodo(id);
          }}
        />
        <Filters
          visibilityFilter={visibilityFilter}
          setVisibilityFilter={setVisibilityFilter}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
  visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
  addTodo: val => dispatch(addTodo(val)),
  toggleTodo: id => dispatch(toggleTodo(id)),
  setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
