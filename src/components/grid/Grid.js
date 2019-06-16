import React from 'react';
import { connect } from 'react-redux';
import { getVisibleMovies } from '../../selectors/index';
import MovieItem from '../movie-item/MovieItem';
import PropTypes from 'prop-types';

import Pagination from '../Pagination';
import Sort from '../Sort';

import './grid.scss';

export class List extends React.Component {
  render() {
    return (
      <div className="">
        <section id="sort">
          <div className="container">
            <Sort />
          </div>
        </section>
        <section>
          <div className="container">
            <div className="Movies__grid">
              {this.props.movies.map(el => (
                <MovieItem
                  title={el.title}
                  date={el.release_date}
                  image={el.backdrop_path}
                  key={el.id}
                  classes={['Movies__item--has-shine']} />
              ))}
            </div>
          </div>
        </section>
        <section id="pagination">
          <div className="container">
            <Pagination />
          </div>
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
