import React, { Component } from 'react';
import TodoApp from './TodoApp';
import '../main.css';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends Component {
  render() {
    const { match } = this.props;
    return (
      <div style={styles}>
        <h2>Start editing to see some magic happen {'\u2728'}</h2>
        <hr />
        <TodoApp filter={match.params.filter} />
      </div>
    );
  }
}

export default App;
