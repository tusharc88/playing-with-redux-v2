import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { toggleTodo } from '../../actions/actionCreators';
import { getVisibleTodos } from '../../selectors/todos';
import TodoList from './TodoList';
import { fetchTodos } from '../../api';
import { ALL_FILTER } from '../../constants';

class TodoListWrapper extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
  };

  static defaultProps = {
    todos: [],
    filter: ALL_FILTER,
  };

  componentDidMount() {
    fetchTodos(this.props.filter).then(todos =>
      console.log(this.props.filter, todos)
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      fetchTodos(this.props.filter).then(todos =>
        console.log(this.props.filter, todos)
      );
    }
  }

  render() {
    const { toggleTodo, todos, filter } = this.props;
    return (
      <TodoList
        todos={todos}
        onTodoClick={id => {
          toggleTodo(id);
        }}
      />
    );
  }
}

const mapStateToProps = (state, { match: { params: { filter } } }) => {
  filter = filter || ALL_FILTER;
  return {
    todos: getVisibleTodos(state, filter),
    filter,
    // visibilityFilter: state.visibilityFilter
  };
};

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TodoListWrapper)
);
