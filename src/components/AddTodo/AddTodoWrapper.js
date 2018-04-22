import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../actions/actionCreators";
import AddTodo from "./AddTodo";

class AddTodoWrapper extends Component {
  handleNewTodoSubmit = value => {
    value = value.trim();
    if (!value) return;
    this.props.addTodo(value);
  };

  render() {
    return <AddTodo handleSubmit={val => this.handleNewTodoSubmit(val)} />;
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: val => dispatch(addTodo(val))
});

export default connect(null, mapDispatchToProps)(AddTodoWrapper);
