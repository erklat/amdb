import React from 'react';
import {Route, Redirect, Switch, BrowserRouter as Router} from 'react-router-dom';

import { connect } from 'react-redux';
import { makeApiCall } from './actions/index';
import Pagination from './components/Pagination';
import Sort from './components/Sort';
import Grid from './components/grid/Grid';
import List from './components/list/List';
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
        <div className="Layout">
            <Spinner />
            <header className="Layout__header Header">
              <img src="http://placehold.it/120x40" alt="bla" />
              <MenuButton />
            </header>

            <Sidebar />

          <main className="Layout__page">
            <section id="sort">
              <div className="container">
                <Sort />
              </div>
            </section>
            <section id="movies" className="Movies">
              <Switch>
                <Route exact path="/" component={PageAnimation(Grid)} />
                <Route exact path="/grid" component={PageAnimation(Grid)} />
                <Route exact path="/list" component={PageAnimation(List)} />
              </Switch>
            </section>
            <section id="pagination">
              <div className="container">
                <Pagination />
              </div>
            </section>
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
