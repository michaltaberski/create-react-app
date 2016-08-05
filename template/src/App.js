import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// MOBX
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
class App extends Component {
  @observable number = 0;

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {this.number}
        </p>
        <p>
          <button onClick={() => --this.number}>-</button>
          <button onClick={() => ++this.number}>+</button>
          </p>
      </div>
    );
  }
}

export default App;
