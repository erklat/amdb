import React from 'react';
import config from '../../config.js';

import './movie-item.scss';

class MovieItem extends React.Component {
  render() {
    return(
      <article className="Movies__item" style={this.props.image ? {backgroundImage: `url(${config.IMAGE_PATH + this.props.image})`} : {} }>
        <div className="Movies__item-gradient">
          <h3 className="Movies__item-title">
            {this.props.title}
          </h3>
          {this.props.date ? <time className="Movies__item-date" dateTime={this.props.date}>{new Date(this.props.date).getFullYear()}</time> : null}
        </div>
      </article>
    )
  }
}

export default MovieItem;
