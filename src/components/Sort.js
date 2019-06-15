import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { setSortParams } from '../actions/index';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAlphaUp, faSortAlphaDown, faCalendarAlt, faLongArrowAltUp, faLongArrowAltDown, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

export class Sort extends React.Component {
  render() {
    return (
      <div className="Sort">
          {this.props.sortParams.key ? <button className="Button" onClick={() => this.props.setSortParams({})}><FontAwesomeIcon icon={faMinusCircle} className="Button__icon" /></button> : null }
          <button className={`Button ${this.props.sortParams.id === 1 ? 'Button--is-active' : ''}`} onClick={() => this.props.setSortParams({key: 'title', type: '', id: 1})} title="Sort by title descending">
            <FontAwesomeIcon icon={faSortAlphaDown} className="Button__icon" />
          </button>
          <button className={`Button ${this.props.sortParams.id === 2 ? 'Button--is-active' : ''}`} onClick={() => this.props.setSortParams({key: 'title', type: '', order: 'asc', id: 2 })} title="Sort by title ascending">
            <FontAwesomeIcon icon={faSortAlphaUp} className="Button__icon" />
          </button>
          <button className={`Button ${this.props.sortParams.id === 3 ? 'Button--is-active' : ''}`} onClick={() => this.props.setSortParams({key: 'release_date', type: 'date', id: 3 })} title="Sort by year descending">
            <FontAwesomeIcon icon={faCalendarAlt} className="Button__icon" /><FontAwesomeIcon icon={faLongArrowAltDown} className="Button__icon" />
          </button>
          <button className={`Button ${this.props.sortParams.id === 4 ? 'Button--is-active' : ''}`} onClick={() => this.props.setSortParams({key: 'release_date', type: 'date', order: 'asc ', id: 4})} title="Sort by year ascending">
            <FontAwesomeIcon icon={faCalendarAlt} className="Button__icon" /><FontAwesomeIcon icon={faLongArrowAltUp} className="Button__icon" />
          </button>
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
