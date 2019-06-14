import React from 'react';
import { connect } from 'react-redux';
import './spinner.scss';
import spinner from './spinner.svg'

class Spinner extends React.Component {
  componentDidMount() {
      console.log('spinner mounted ', this.props);
  }

  render() {
    if (this.props.fetching) {
      return(
        <div className="Spinner">
          <span className="u-isVisuallyHidden" aria-busy="true" aria-live="polite" role="alert">Experience is being loaded...</span>
          <img src={spinner} alt="spinner" className="Spinner__image" aria-hidden="true" />
        </div>
      )
    }

    return null;
  }
}


function mapStateToProps(state) {
  return {
    fetching: state.fetching,
  }
}

export default connect(
  mapStateToProps,
  null
)(Spinner);
