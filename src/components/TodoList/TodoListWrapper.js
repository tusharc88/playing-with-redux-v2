import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toggleTodo } from "../../actions/actionCreators";
import TodoList from "./TodoList";

class TodoListWrapper extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    visibilityFilter: PropTypes.string.isRequired
  };

  static defaultProps = {
    todos: [],
    visibilityFilter: "ALL"
  };

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
    const { toggleTodo, todos, visibilityFilter } = this.props;
    return (
      <TodoList
        todos={this.getFilteredTodos({
          filter: visibilityFilter,
          todos: todos
        })}
        onTodoClick={id => {
          toggleTodo(id);
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
  visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListWrapper);
