import { v4 } from 'node-uuid';
import {
  ADD_TODO,
  TOGGLE_TODO,
  RECEIVE_TODOS,
  SET_VISIBILITY_FILTER,
} from '../constants';

export const addTodo = val => ({
  type: ADD_TODO,
  text: val,
  id: v4(),
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id: id,
});

export const receiveTodos = (filter, todos) => ({
  type: RECEIVE_TODOS,
  filter,
  todos,
});

// export const setVisibilityFilter = filter => ({
//   type: SET_VISIBILITY_FILTER,
//   filter: filter
// });
