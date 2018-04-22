import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleTodo } from '../../actions/actionCreators';
import { ALL_FILTER, ACTIVE_FILTER, COMPLETED_FILTER } from '../../constants';
import TodoList from './TodoList';

class TodoListWrapper extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
  };

  static defaultProps = {
    todos: [],
    filter: ALL_FILTER,
  };

  getFilteredTodos = ({ filter, todos }) => {
    switch (filter) {
      case ALL_FILTER:
        return todos;
      case ACTIVE_FILTER:
        return todos.filter(todo => todo.completed === false);
      case COMPLETED_FILTER:
        return todos.filter(todo => todo.completed === true);
      default:
        return todos;
    }
  };

  render() {
    const { toggleTodo, todos, filter } = this.props;
    return (
      <TodoList
        todos={this.getFilteredTodos({
          filter: filter,
          todos: todos,
        })}
        onTodoClick={id => {
          toggleTodo(id);
        }}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
  filter: ownProps.filter,
  // visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListWrapper);
