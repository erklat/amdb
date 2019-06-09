import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { setSortParams } from '../actions/index';
import { sortMovies, sortSelector } from '../selectors/index';
import PropTypes from 'prop-types';
import config from '../config.js';

export class Sort extends React.Component {

  render() {
    console.log(this.props.movies);
    return (
      <div className="container">
        <div className="Sort">
          <button onClick={() => this.props.setSortParams({key: 'title', type: ''})}>By name DESC</button>
          <button onClick={() => this.props.setSortParams({key: 'title', type: '', order: 'asc' })}>By name ASC</button>
          <button onClick={() => this.props.setSortParams({key: 'release_date', type: 'date' })}>By year DESC</button>
          <button onClick={() => this.props.setSortParams({key: 'release_date', type: 'date', order: 'asc '})}>By year ASC</button>
        </div>
      </div>
    )
  }
}

Sort.propTypes = {
  movies: PropTypes.array
}

function mapStateToProps(state) {
  console.log('state: ', state);
  return {
    // movies: sortMovies(state),
    // sortParams: sortSelector(state)
  }
}

const mapDispatchToProps = dispatch => ({
  setSortParams: bindActionCreators(setSortParams, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sort);
