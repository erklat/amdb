import React from 'react';
import List from './components/List';
import logo from './logo.svg';
import './App.css';
import './assets/scss/main.scss';

function App() {
  return (
    <div className="App">
      <h2>Movies</h2>
      <List />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
