import React from 'react';
import {Route, Redirect, Switch, BrowserRouter as Router} from 'react-router-dom';

import { connect } from 'react-redux';
import { makeApiCall } from './actions/index';
import Pagination from './components/Pagination';
import Grid from './components/Grid';
import List from './components/List';
import MenuButton from './components/MenuButton';
import Sidebar from './components/Sidebar';
import PageAnimation from './components/PageAnimation';
import Spinner from './components/spinner/Spinner';

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
          <Spinner />
          <header className="Layout__header Header">
            <img src="http://placehold.it/120x40" alt="bla" />
            <MenuButton />
          </header>

          <Sidebar />

        <main className="Layout__page">
          <Switch>
            <Route exact path="/" component={PageAnimation(Grid)} />
            <Route exact path="/grid" component={PageAnimation(Grid)} />
            <Route exact path="/list" component={PageAnimation(List)} />
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
