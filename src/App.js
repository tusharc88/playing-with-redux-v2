import React, { Component } from "react";
import TodoApp from "./components/TodoApp";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  render() {
    // console.log(store.getState());
    return (
      <div style={styles}>
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
        <hr />
        <TodoApp />
      </div>
    );
  }
}

export default App;
