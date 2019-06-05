import React from 'react';
import List from './components/List';
import logo from './logo.svg';
import './App.css';
import './assets/scss/main.scss';

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <header className="Header">
          <img src="http://placehold.it/300x300" alt="bla" />
        </header>
        <nav className="Navigation">
          <ul>
            <li>
              Test 1
            </li>
            <li>
              Test 1
            </li>
            <li>
              Test 1
            </li>
            <li>
              Test 1
            </li>
            <li>
              Test 1
            </li>
          </ul>
        </nav>
        <main className="Page">
          <List />
        </main>
        <footer className="Footer">
          Copyright 2018
        </footer>
      </div>
      {/*
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
      */}
    </div>
  );
}

export default App;
