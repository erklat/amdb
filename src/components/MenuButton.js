import React from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from '../actions/index';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

class MenuButton extends React.Component {
  render() {
    return(
      <button onClick={this.props.toggleMenu} className="Header__menu-button Button">
        <FontAwesomeIcon icon={faBars} className="Header__menu-button-icon" />
        <FontAwesomeIcon icon={faTimes} className="Header__menu-button-icon" />
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
