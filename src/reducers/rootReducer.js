import { combineReducers } from 'redux';
import todos, * as fromTodos from './todos';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  todos,
  // visibilityFilter
});

export const getFilteredTodos = (state, filter) =>
  fromTodos.getFilteredTodos(state.todos, filter);

export default rootReducer;
