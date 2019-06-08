import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MenuButton from './MenuButton';

import routes from '../routes/index';

class Sidebar extends React.Component {

  // _renderRoutes() {
  //   console.log(routes);
  //   for (let route of routes) {
  //     console.log(route);
  //     return (
  //
  //     )
  //   }
  // }

  render() {
    return(
      <nav className={`Layout__navigation Navigation ${this.props.menuActive === true ? 'Navigation--is-active' : ''}`}>
        <ul>
          {routes.map((route, key) => {
            return(
              <li key={key}>
                <Link to={route.path}>{route.title}</Link>
              </li>
            )
          })}
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

  return {
    menuActive: state.menuActive,
  }
}

export default connect(
  mapStateToProps,
  null
)(Sidebar);
