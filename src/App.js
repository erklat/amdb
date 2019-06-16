import React from 'react';
import {Route, Redirect, Switch, BrowserRouter as Router} from 'react-router-dom';

import { connect } from 'react-redux';
import { makeApiCall } from './actions/index';
import Grid from './components/grid/Grid';
import List from './components/list/List';
import NotFound from './components/not-found/NotFound';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import PageShell from './components/pageshell/PageShell';
import Spinner from './components/spinner/Spinner';
import Alert from './components/alert/Alert';

import './assets/scss/main.scss';

class App extends React.Component {
  componentDidMount() {
    this.props.makeApiCall();
  }

  render() {
    return (
      <Router>
        <div className="Layout">
          <Spinner />

          <Alert />

          <Header />

          <Sidebar />

          <main className="Layout__page">
            <Switch>
              <Route exact path="/" component={PageShell(Grid)} />
              <Route exact path="/list" component={PageShell(List)} />
              <Route exact path="/404" component={PageShell(NotFound)} />
              <Redirect to="/404" />
            </Switch>
          </main>

          <footer className="Layout__footer Footer">
            <p className="Footer__text">Crafted by <a href="//github.com/erklat" target="blank" rel="noopener nofollow" className="Footer__link">erklat</a> for AM2</p>
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
