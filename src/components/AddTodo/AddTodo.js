import React from "react";
import PropTypes from "prop-types";

const AddTodo = ({ handleSubmit }) => {
  const onFormSubmit = e => {
    e.preventDefault();
    handleSubmit(e.target.add.value);
    e.target.add.value = "";
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="add" />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

AddTodo.defaultProps = {
  handleSubmit: () => {}
};

export default AddTodo;
