import React from "react";
import AddTodoWrapper from "./AddTodo/AddTodoWrapper";
import TodoListWrapper from "./TodoList/TodoListWrapper";
import Filters from "./Filters/Filters";

const TodoApp = () => (
  <div>
    <AddTodoWrapper />
    <TodoListWrapper />
    <Filters />
  </div>
);

export default TodoApp;
