import React from 'react';
import {Route, Redirect, Switch, BrowserRouter as Router} from 'react-router-dom';

import { connect } from 'react-redux';
import { makeApiCall } from './actions/index';
import Pagination from './components/Pagination';
import Grid from './components/Grid';
import List from './components/List';
import MenuButton from './components/MenuButton';
import Sidebar from './components/Sidebar';

import './App.css';
import './assets/scss/main.scss';

class App extends React.Component {
  componentDidMount() {
    this.props.makeApiCall();
  }

  render() {
    return (
      <Router>
        <div className="App Layout">
        <div className="Layout__container">
          <header className="Layout__header">
            <img src="http://placehold.it/120x40" alt="bla" />
            <MenuButton />
          </header>

          <Sidebar />

        <main className="Layout__page">
          <Switch>
            <Route exact path="/" component={Grid} />
            <Route exact path="/grid" component={Grid} />
            <Route exact path="/list" component={List} />
          </Switch>
        </main>

        <footer className="Layout__footer">
          Copyright 2018
        </footer>
        </div>
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  { makeApiCall }
)(App);
