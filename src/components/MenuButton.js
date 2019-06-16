import React from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from '../actions/index';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

class MenuButton extends React.Component {
  render() {
    return(
      <button onClick={this.props.toggleMenu} className="Header__menu-button Button" aria-haspopup="true" aria-controls="navigation" aria-expanded={this.props.menuActive ? 'true' : 'false'}>
        <FontAwesomeIcon icon={faBars} className={`Header__menu-button-icon ${!this.props.menuActive ? 'Header__menu-button-icon--is-active' : ''} `} />
        <FontAwesomeIcon icon={faTimes} className={`Header__menu-button-icon ${this.props.menuActive ? 'Header__menu-button-icon--is-active' : ''} `} />
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
