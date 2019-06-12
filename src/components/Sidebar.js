import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import routes from '../routes/index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faListUl, faTh } from '@fortawesome/free-solid-svg-icons'


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

  _renderNavLink(route) {
    let icon = null;
    switch (route.path) {
      case '/':
        icon = <FontAwesomeIcon icon={faHome} className={`Navigation__icon`} />;
        break;
      case '/list':
        icon = <FontAwesomeIcon icon={faListUl} className="Navigation__icon" />;
        break;
      case '/grid':
        icon = <FontAwesomeIcon icon={faTh} className="Navigation__icon" />;
        break;
      default:
        return icon;
    }

    return (
      <Link to={route.path} className={`Navigation__link ${route.path === this.props.location.pathname ? 'Navigation__link--is-active' : ''}`}>
        {icon}
        <span className="u-isVisuallyHidden">{route.title}</span>
      </Link>
    )
  }

  render() {
    return(
      <nav className={`Layout__navigation Navigation ${this.props.menuActive === true ? 'Navigation--is-active' : ''}`}>
        <ul className="Navigation__list">
          {routes.map((route, key) => {
            return(
              <li key={key} className="Navigation__list-item">
                {this._renderNavLink(route)}
              </li>
            )
          })}
        </ul>
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
)(withRouter(Sidebar));
