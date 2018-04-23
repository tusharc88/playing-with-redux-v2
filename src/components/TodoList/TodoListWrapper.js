import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { toggleTodo, fetchTodos } from '../../actions/actionCreators';
import { getVisibleTodos } from '../../selectors/todos';
import TodoList from './TodoList';
// import { fetchTodos } from '../../actions';
// import { fetchTodos } from '../../api';
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
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData = () => {
    // console.log('fetchData');
    const { fetchTodos, filter } = this.props;
    fetchTodos(filter);
  };

  render() {
    const { toggleTodo, todos } = this.props;
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

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  fetchTodos: filter => {
    // console.log(ownProps.filter);
    dispatch(fetchTodos(filter));
  },
  // receiveTodos: (filter, todos) => dispatch(receiveTodos(filter, todos)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TodoListWrapper)
);
