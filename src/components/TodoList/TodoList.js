import React from "react";
import PropTypes from "prop-types";
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

Todo.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
};

Todo.defaultProps = {
  onTodoClick: () => {},
  todos: []
};

export default TodoList;
