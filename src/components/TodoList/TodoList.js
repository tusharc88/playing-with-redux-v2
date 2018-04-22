import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <Todo
        onClick={() => onTodoClick(todo.id)}
        text={todo.text}
        key={todo.id}
        completed={todo.completed}
      />
    ))}
  </ul>
);

export default TodoList;
