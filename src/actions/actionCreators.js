import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from "../constants";
import { uniqueId } from "../utils";

export const addTodo = val => ({
  type: ADD_TODO,
  text: val,
  id: uniqueId()
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id: id
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter: filter
});
