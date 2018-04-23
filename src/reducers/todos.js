import { combineReducers } from 'redux';
import todo from './todo';
import {
  ADD_TODO,
  TOGGLE_TODO,
  ALL_FILTER,
  ACTIVE_FILTER,
  COMPLETED_FILTER,
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
  switch (action.type) {
    case ADD_TODO:
    case TOGGLE_TODO:
      return {
        ...state,
        [action.id]: todo(state[action.id], action),
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  // console.log(action.filter);
  // if (action.filter !== ALL_FILTER) {
  //   return state;
  // }
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.id];
    default:
      return state;
  }
};

const activeIds = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.id];
    case TOGGLE_TODO: {
      const index = state.indexOf(action.id);
      if (index > -1) {
        state.splice(index, 1);
      }
      return index > -1 ? state : [...state, action.id];
    }
    default:
      return state;
  }
};

const completedIds = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_TODO: {
      const index = state.indexOf(action.id);
      if (index > -1) {
        state.splice(index, 1);
      }
      return index > -1 ? state : [...state, action.id];
    }
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
