import { ALL_FILTER, ACTIVE_FILTER, COMPLETED_FILTER } from '../constants';

const getFilteredTodos = (state, filter) => {
  switch (filter) {
    case ALL_FILTER:
      return state;
    case ACTIVE_FILTER:
      return state.filter(todo => todo.completed === false);
    case COMPLETED_FILTER:
      return state.filter(todo => todo.completed === true);
    default:
      return state;
  }
};

export const getVisibleTodos = (state, filter) =>
  getFilteredTodos(state.todos, filter);
