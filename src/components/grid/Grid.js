import React from 'react';
import { connect } from 'react-redux';
import { getVisibleMovies } from '../../selectors/index';
import MovieItem from '../movie-item/MovieItem';
import PropTypes from 'prop-types';

import './grid.scss';

export class List extends React.Component {
  render() {
    return (
      <div className="container">
        <section className="Movies__grid">
          {this.props.movies.map(el => (
            <MovieItem title={el.title} image={el.backdrop_path} key={el.id} classes={['Movies__item--has-shine']} />
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
