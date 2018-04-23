import { combineReducers } from 'redux';
// import todo from './todo';
import {
  ALL_FILTER,
  ACTIVE_FILTER,
  COMPLETED_FILTER,
  RECEIVE_TODOS,
} from '../constants';

// const todos = (state = [], action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return [...state, todo(undefined, action)];
//     case TOGGLE_TODO:
//       return state.map(t => todo(t, action));
//     default:
//       return state;
//   }
// };

const byId = (state = {}, action) => {
  console.log('byId');
  switch (action.type) {
    // case ADD_TODO:
    // case TOGGLE_TODO:
    //   return {
    //     ...state,
    //     [action.id]: todo(state[action.id], action),
    //   };

    case RECEIVE_TODOS:
      const nextState = { ...state };
      action.todos.forEach(todo => {
        nextState[todo.id] = todo;
      });
      return nextState;
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  console.log('allIds');
  if (action.filter !== ALL_FILTER) {
    return state;
  }
  switch (action.type) {
    // case ADD_TODO:
    //   return [...state, action.id];
    case RECEIVE_TODOS:
      return action.todos.map(todo => todo.id);
    default:
      return state;
  }
};

const activeIds = (state = [], action) => {
  console.log('activeIds');
  if (action.filter !== ACTIVE_FILTER) {
    return state;
  }
  switch (action.type) {
    case RECEIVE_TODOS:
      return action.todos.map(todo => todo.id);
    default:
      return state;
  }
};

const completedIds = (state = [], action) => {
  console.log('completedIds');
  if (action.filter !== COMPLETED_FILTER) {
    return state;
  }
  switch (action.type) {
    case RECEIVE_TODOS:
      return action.todos.map(todo => todo.id);
    default:
      return state;
  }
};

const idsByFilter = combineReducers({
  all: allIds,
  active: activeIds,
  completed: completedIds,
});

const todos = combineReducers({
  byId,
  // allIds,
  idsByFilter,
});

export default todos;
