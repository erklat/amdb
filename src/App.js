import React from 'react';
import {Route, Redirect, Switch, BrowserRouter as Router} from 'react-router-dom';

import { connect } from 'react-redux';
import { makeApiCall } from './actions/index';
import Grid from './components/grid/Grid';
import List from './components/list/List';
import NotFound from './components/not-found/NotFound';
import MenuButton from './components/MenuButton';
import Sidebar from './components/Sidebar';
import PageShell from './components/pageshell/PageShell';
import Spinner from './components/spinner/Spinner';
import Alert from './components/alert/Alert';

import './App.css';
import './assets/scss/main.scss';

class App extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.makeApiCall();
  }

  render() {
    return (
      <Router>
        <div className="Layout">
          <Spinner />
          <Alert />
          <header className="Layout__header Header">
            <img src="http://placehold.it/120x40" alt="bla" />
            <MenuButton />
          </header>

          <Sidebar />

          <main className="Layout__page">
            <Switch>
              <Route exact path="/" component={PageShell(Grid)} />
              <Route exact path="/grid" component={PageShell(Grid)} />
              <Route exact path="/list" component={PageShell(List)} />
              <Route exact path="/404" component={PageShell(NotFound)} />
              <Redirect to="/404" />
            </Switch>
          </main>

          <footer className="Layout__footer">
            Copyright 2018
          </footer>
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  { makeApiCall }
)(App);
