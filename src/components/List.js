import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions/index';
import PropTypes from 'prop-types';

export class List extends React.Component {
  componentDidMount() {
    this.props.makeApiCall();
  }

  render() {
    return (
      <ul className="moviesList">
        {this.props.movies.map(el => (
          <li className="moviesList__item" key={el.id}>
            {el.title}
          </li>
        ))}
      </ul>
    )
  }
}

List.propTypes = {
  movies: PropTypes.array
}

function mapStateToProps(state) {
  console.log('state: ', state);
  return {
    movies: state.movies
  }
}

export default connect(
  mapStateToProps,
  { makeApiCall }
)(List);
