import React, { Component } from 'react';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Homwork App</h1>
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default App;
