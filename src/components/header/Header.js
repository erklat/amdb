import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MenuButton from '../MenuButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTape } from '@fortawesome/free-solid-svg-icons';

import './header.scss';

class Header extends React.Component {
  render() {
    return(
      <header className="Layout__header">
        <div className="container">
          <div className={`Header ${this.props.menuActive ? 'Header--is-active' : ''}`}>
            <h1 className="Header__title">
              <FontAwesomeIcon icon={faTape} aria-hidden="true" className="Header__title-icon"/>
              AMDB
            </h1>
            <MenuButton />
          </div>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  menuActive: PropTypes.bool.isRequired
}

function mapStateToProps(state) {

  return {
    menuActive: state.menuActive,
  }
}

export default connect(
  mapStateToProps,
  null
)(Header);
