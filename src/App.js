import React, { Component } from 'react';
import './App.css';

import ToDo from './components/ToDo'
import About from './components/About/About'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDo />
        <About />
      </div>
    );
  }
}

export default App;
