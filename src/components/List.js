import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions/index';
import Pagination from '../components/Pagination';
import { getVisibleMovies } from '../selectors/index';
import PropTypes from 'prop-types';

export class List extends React.Component {
  componentDidMount() {
    this.props.makeApiCall();
  }

  render() {
    return (
      <div>
        <section className="Movies">
          {this.props.movies.map(el => (
            <article className="Movies__item" key={el.id}>
              <h3 className="Movies__item-title">
                {el.title}
              </h3>
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
  console.log('state: ', state);
  return {
    movies: getVisibleMovies(state),
  }
}

export default connect(
  mapStateToProps,
  { makeApiCall }
)(List);
