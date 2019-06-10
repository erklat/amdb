import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions/index';
import Pagination from '../components/Pagination';
import { getVisibleMovies } from '../selectors/index';
import PropTypes from 'prop-types';
import Sort from '../components/Sort';
import config from '../config.js';

export class List extends React.Component {

  render() {
    return (
      <div className="container">
        <Sort />
        <section className="Movies">
          {this.props.movies.map(el => (
            <article className="Movies__item" key={el.id} style={{backgroundImage: `url(${config.IMAGE_PATH + el.backdrop_path})`}}>
              <div className="Movies__item-gradient">
                <h3 className="Movies__item-title">
                  {el.title}
                </h3>
              </div>
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
