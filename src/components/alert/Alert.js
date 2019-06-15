import React from 'react';
import { connect } from 'react-redux';
import { closeAlert } from '../../actions/index';
import './alert.scss';

class Alert extends React.Component {

  render() {
    return (
      <div className="Alert">
        <dialog className="Alert__dialog">
          <h2 className="Alert__title">Error</h2>
          <p className="Alert__text">
            Experience failed to load. <br />
            Reloading might help.
          </p>
          <button className="Button Alert__button" onClick={() => this.props.closeAlert(null)}>
            OK
          </button>
        </dialog>
      </div>
    )
  }
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
