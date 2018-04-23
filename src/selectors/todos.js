import { ALL_FILTER, ACTIVE_FILTER, COMPLETED_FILTER } from '../constants';

const getAllTodos = state => state.allIds.map(id => state.byId[id]);

const getFilteredTodos = (state, filter) => {
  // const allTodos = getAllTodos(state);
  // switch (filter) {
  //   case ALL_FILTER:
  //     return allTodos;
  //   case ACTIVE_FILTER:
  //     return allTodos.filter(todo => todo.completed === false);
  //   case COMPLETED_FILTER:
  //     return allTodos.filter(todo => todo.completed === true);
  //   default:
  //     return allTodos;
  // }

  // instead of getting all todos, get todos of a particular filter
  const ids = state.idsByFilter[filter];
  return ids.map(id => state.byId[id]);
};

// This is what makes selectors worthwile, it gives the api that it takes state and passes only part of the state
// forward, making the user of this function not care about what state has to be passed to the selector.
export const getVisibleTodos = (state, filter) =>
  getFilteredTodos(state.todos, filter);
