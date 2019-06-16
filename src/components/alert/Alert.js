import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { closeAlert } from '../../actions/index';
import './alert.scss';

class Alert extends React.Component {
  render() {
    if (this.props.error === null) {
      return null;
    }

    return (
      <div className="Alert">
        <dialog className="Alert__dialog" aria-labelledby="error-title" aria-describedby="error-desc" aria-live="assertive">
          <h2 className="Alert__title" id="error-title">Error</h2>
          <p className="Alert__text" id="error-desc">
            {this.props.error.message || 'Unknown error occurred'}
          </p>
          <button className="Button Button--primary Button--large Alert__button " onClick={() => this.props.closeAlert(null)}>
            OK
          </button>
        </dialog>
      </div>
    )
  }
}

Alert.propTypes = {
  error: PropTypes.object
}

function mapStateToProps(state) {
  return {
    error: state.error,
  }
}

export default connect(
  mapStateToProps,
  { closeAlert }
)(Alert);
