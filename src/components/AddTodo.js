import React from "react";

const AddTodo = ({ handleSubmit }) => (
  <div>
    <form onSubmit={e => handleSubmit(e)}>
      <input type="text" name="add" />
      <input type="submit" value="Add" />
    </form>
  </div>
);

export default AddTodo;
