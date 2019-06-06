import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MenuButton from './MenuButton';

class Sidebar extends React.Component {
  render() {
    return(
      <nav className={`Layout__navigation Navigation ${this.props.menuActive === true ? 'Navigation--is-active' : ''}`}>
        <ul>
          <li>
            Test 1
          </li>
          <li>
            Test 1
          </li>
          <li>
            Test 1
          </li>
          <li>
            Test 1
          </li>
          <li>
            Test 1
          </li>
        </ul>
        <MenuButton />
      </nav>
    )
  }
}

Sidebar.propTypes = {
  menuActive: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  console.log('state: ', state);
  return {
    menuActive: state.menuActive,
  }
}

export default connect(
  mapStateToProps,
  null
)(Sidebar);
