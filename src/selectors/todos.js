import { ALL_FILTER, ACTIVE_FILTER, COMPLETED_FILTER } from '../constants';

// const getAllTodos = state => state.allIds.map(id => state.byId[id]);

const getFilteredTodos = (state, filter) => {
  // const allTodos = getAllTodos(state);
  // switch (filter) {
  // case ALL_FILTER:
  //   return allTodos;
  // case ACTIVE_FILTER:
  //   return allTodos.filter(todo => todo.completed === false);
  // case COMPLETED_FILTER:
  //   return allTodos.filter(todo => todo.completed === true);
  // default:
  //   return allTodos;
  const idsByFilter = state.idsByFilter[filter];
  // console.log(idsByFilter);
  return idsByFilter ? idsByFilter.map(id => state.byId[id]) : [];
};

export const getVisibleTodos = (state, filter) =>
  getFilteredTodos(state.todos, filter);
