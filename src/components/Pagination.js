import React from 'react';
import { connect } from 'react-redux';
import { changePage } from '../actions/index';
import PropTypes from 'prop-types';

export class ListPagination extends React.Component {
  constructor() {
    super();
    this._renderPaginationItems = this._renderPaginationItems.bind(this);
  }

  _renderPaginationItems() {
    if (this.props.movies.count < 10) {
      return null;
    }
    const range = [];
    for (let i = 0; i < Math.ceil(this.props.movies.length / 10); i++) {
      range.push(i);
    }

    return range.map(v => {
      const isCurrent = v + 1 === this.props.currentPage;
      return(
        <li
          key={v}
          onClick={() => this.props.changePage(v + 1)}
          className={ isCurrent ? 'Pagination__item Pagination__item--active' : 'Pagination__item' }
          >
          {v + 1}
        </li>
      );
    });
  }

  render() {
    return (
      <nav>
        <ul className="Pagination">
          {this._renderPaginationItems()}
        </ul>
      </nav>
    )
  }
}

ListPagination.propTypes = {
  movies: PropTypes.array,
  currentPage: PropTypes.number,
}

function mapStateToProps(state) {
  console.log('state: ', state);
  return {
    movies: state.movies,
    currentPage: state.currentPage
  }
}

export default connect(
  mapStateToProps,
  { changePage }
)(ListPagination);
