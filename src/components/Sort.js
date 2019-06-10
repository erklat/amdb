import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { setSortParams } from '../actions/index';
import PropTypes from 'prop-types';
import config from '../config.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAlphaUp, faSortAlphaDown, faCalendarAlt, faLongArrowAltUp, faLongArrowAltDown, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

export class Sort extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="Sort">
          {this.props.sortParams.key ? <button className="Button" onClick={() => this.props.setSortParams({})}><FontAwesomeIcon icon={faMinusCircle} /></button> : null }
          <button className="Button" onClick={() => this.props.setSortParams({key: 'title', type: ''})} title="Sort by title descending">  
            <FontAwesomeIcon icon={faSortAlphaDown} />
          </button>
          <button className="Button" onClick={() => this.props.setSortParams({key: 'title', type: '', order: 'asc' })} title="Sort by title descending">
            <FontAwesomeIcon icon={faSortAlphaUp} />
          </button>
          <button className="Button" onClick={() => this.props.setSortParams({key: 'release_date', type: 'date' })}>
            <FontAwesomeIcon icon={faCalendarAlt} /><FontAwesomeIcon icon={faLongArrowAltDown} />
          </button>
          <button className="Button" onClick={() => this.props.setSortParams({key: 'release_date', type: 'date', order: 'asc '})}>
            <FontAwesomeIcon icon={faCalendarAlt} /><FontAwesomeIcon icon={faLongArrowAltUp} />
          </button>
        </div>
      </div>
    )
  }
}

Sort.propTypes = {
  sortParams: PropTypes.object
}

function mapStateToProps(state) {
  return {
    sortParams: state.sortParams
  }
}

const mapDispatchToProps = dispatch => ({
  setSortParams: bindActionCreators(setSortParams, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sort);
