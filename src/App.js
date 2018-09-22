import React, { Component } from 'react';
import './App.css';
import { NavBar } from './components';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <h1>Building</h1>
      </React.Fragment>
    );
  }
}

export default App;
