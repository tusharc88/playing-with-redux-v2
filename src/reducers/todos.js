import { ADD_TODO, TOGGLE_TODO } from "../actions/types";

const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
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
      // const selctedTodo = state.filter(val => val.id === action.id)[0];
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

export default todos;
