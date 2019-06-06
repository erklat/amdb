import React from 'react';
import List from './components/List';
import logo from './logo.svg';
import './App.css';
import './assets/scss/main.scss';
import MenuButton from './components/MenuButton';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App Layout">
      <div className="Layout__container">
        <header className="Layout__header">
          <img src="http://placehold.it/120x40" alt="bla" />
          <MenuButton />
        </header>

        <Sidebar />

        <main className="Layout__page">
          <List />
        </main>
        
        <footer className="Layout__footer">
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
