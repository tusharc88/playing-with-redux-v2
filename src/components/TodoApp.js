import React from 'react';
import AddTodoWrapper from './AddTodo/AddTodoWrapper';
import TodoListWrapper from './TodoList/TodoListWrapper';
import Filters from './Filters/Filters';
import { ALL_FILTER } from '../constants';

const TodoApp = ({ filter }) => (
  <div>
    <AddTodoWrapper />
    <TodoListWrapper filter={!filter ? ALL_FILTER : filter} />
    <Filters />
  </div>
);

export default TodoApp;
