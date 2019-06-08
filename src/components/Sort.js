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
          <button onClick={() => this.props.setSortParams({key: 'name', type: ''})}>By name</button>
          <button onClick={() => this.props.setSortParams({key: 'release_date', type: 'date'})}>By year</button>
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
    //movies: sortMovies(state),
    sortParams: sortSelector(state)
  }
}

const mapDispatchToProps = dispatch => ({
  setSortParams: bindActionCreators(setSortParams, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sort);
