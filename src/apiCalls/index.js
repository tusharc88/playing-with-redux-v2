import { receiveTodos } from '../actions/actionCreators';
import * as api from '../api';

export const fetchTodos = filter =>
  api.fetchTodos(filter).then(todos => {
    console.log(todos);
    receiveTodos(filter, todos);
  });
