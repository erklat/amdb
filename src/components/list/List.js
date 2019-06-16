import React from 'react';
import { connect } from 'react-redux';
import { getVisibleMovies } from '../../selectors/index';
import PropTypes from 'prop-types';
import MovieItem from '../movie-item/MovieItem';

import Pagination from '../Pagination';
import Sort from '../Sort';

import './list.scss';


export class List extends React.Component {

  render() {
    return (
      <div className="">
        <section id="sort">
          <div className="container">
            <Sort />
          </div>
        </section>
        <section id="movies">
          <div className="container">
            <div className="Movies Movies__list">
              {this.props.movies.map(el => (
                <MovieItem title={el.title} date={el.release_date} key={el.id} />
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
