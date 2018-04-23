import { v4 } from 'node-uuid';
import * as api from '../api';
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

export const fetchTodos = filter => dispatch => {
  console.log(filter);
  api.fetchTodos(filter).then(todos => {
    console.log(todos);
    dispatch(receiveTodos(filter, todos));
  });
};

// export const setVisibilityFilter = filter => ({
//   type: SET_VISIBILITY_FILTER,
//   filter: filter
// });
