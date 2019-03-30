import React, { Component } from 'react';
import './App.css';
import NavMenu from './components/NavMenu';
import ConfigContainer from "./components/ConfigContainer"
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <NavMenu/>
        </header>
        <ConfigContainer/>
      </div>
    );
  }
}

export default App;
