import React from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from '../actions/index';
import PropTypes from 'prop-types';

class MenuButton extends React.Component {
  render() {
    return(
      <button onClick={this.props.toggleMenu} className="Header__menu-button">
      {'Toggle'}
      </button>
    )
  }
}

MenuButton.propTypes = {
  menuActive: PropTypes.bool.isRequired
}

function mapStateToProps(state) {

  return {
    menuActive: state.menuActive,
  }
}

export default connect(
  mapStateToProps,
  { toggleMenu }
)(MenuButton);
