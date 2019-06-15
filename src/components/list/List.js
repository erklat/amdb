import React from 'react';
import { connect } from 'react-redux';
import { getVisibleMovies } from '../../selectors/index';
import PropTypes from 'prop-types';
import MovieItem from '../movie-item/MovieItem';

import './list.scss';


export class List extends React.Component {

  render() {
    return (
      <div className="container">
        <section className="Movies Movies__list" id="movies-list">
          {this.props.movies.map(el => (
            <MovieItem title={el.title} date={el.release_date} key={el.id} />
          ))}
        </section>
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
  null
)(List);
