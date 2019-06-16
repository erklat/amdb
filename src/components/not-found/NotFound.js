import React from 'react';
import './not-found.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlink } from '@fortawesome/free-solid-svg-icons';

class NotFound extends React.Component {
  render() {
    return(
      <div className="NotFound">
        <div className="NotFound__wrapper">
          <FontAwesomeIcon icon={faUnlink} size="6x" className="NotFound__icon" aria-hidden="true" />
          <h2 className="NotFound__title">Page not found.</h2>
        </div>
      </div>
    )
  }
}

export default NotFound;
