import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions/index';
import Pagination from '../components/Pagination';
import Sort from '../components/Sort';
import { getVisibleMovies } from '../selectors/index';
import PropTypes from 'prop-types';
import config from '../config.js';


export class List extends React.Component {
  componentDidMount() {
    this.props.makeApiCall();
  }

  render() {
    return (
      <div className="container">
        <Sort />
        <section className="Movies Movies__list" id="movies-list">
          {this.props.movies.map(el => (
            <article className="Movies__list-item" key={el.id}>
              <h3 className="Movies__list-item-title">
                {el.title} 
              </h3>
              <time className="Movies__list-item-date" dateTime={el.release_date}>{el.release_date}</time>
            </article>
          ))}
        </section>
        <Pagination />
      </div>
    )
  }
}

List.propTypes = {
  movies: PropTypes.array
}

function mapStateToProps(state) {
  return {
    movies: getVisibleMovies(state),
  }
}

export default connect(
  mapStateToProps,
  { makeApiCall }
)(List);
