import {
  ADD_TODO,
  TOGGLE_TODO,
  ALL_FILTER,
  ACTIVE_FILTER,
  COMPLETED_FILTER,
} from '../constants';

const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case TOGGLE_TODO:
      if (state.id !== action.id) return state;
      return { ...state, completed: !state.completed };
    default:
      return {};
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, todo(undefined, action)];
    case TOGGLE_TODO:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

export const getFilteredTodos = (state, filter) => {
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

export default todos;
