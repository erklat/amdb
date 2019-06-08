import React from 'react';
import {Route, Redirect, Switch, BrowserRouter as Router} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import './assets/scss/main.scss';

import MoviesGrid from './screens/MoviesGrid';
import MoviesList from './screens/MoviesList';

function App() {
  return (
    <Router>
      <div className="App Layout">
        <Switch>
          <Route exact path="/" component={MoviesGrid} />
          <Route exact path="/grid" component={MoviesGrid} />
          <Route exact path="/list" component={MoviesList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
