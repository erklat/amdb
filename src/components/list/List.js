import React from 'react';
import { connect } from 'react-redux';
import { getVisibleMovies } from '../../selectors/index';
import PropTypes from 'prop-types';
import MovieItem from '../movie-item/MovieItem';

import Pagination from '../pagination/Pagination';
import Sort from '../sort/Sort';

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
        <section>
          <div className="container">
            <div className="Movies Movies__list" aria-labelledby="grid-title" aria-sort={this.props.sortParams.order ? this.props.sortParams.order + 'ending' : ''} id="movies">
              <h2 className="u-isVisuallyHidden" id="grid-title">{`Movies list ${this.props.sortParams.type && this.props.sortParams.order ? 'sorted by ' + this.props.sortParams.type + ' ' + this.props.sortParams.order : ''}`}</h2>
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
    sortParams: state.sortParams,
    movies: getVisibleMovies(state),
  }
}

export default connect(
  mapStateToProps,
  null
)(List);
