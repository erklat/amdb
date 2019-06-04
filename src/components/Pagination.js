import React from 'react';
import { connect } from 'react-redux';
import { changePage } from '../actions/index';
import PropTypes from 'prop-types';

export class ListPagination extends React.Component {
  constructor() {
    super();
    this._renderPaginationItems = this._renderPaginationItems.bind(this);
  }

  _handleMoveLeft() {
    const currentPage = this.props.currentPage;
    return currentPage > 1 ? this.props.changePage(currentPage - 1) : false;
  }

  _handleMoveRight() {
    const currentPage = this.props.currentPage;
    return currentPage < Math.ceil(this.props.moviesCount / this.props.pagingSize) ? this.props.changePage(currentPage + 1) : false;
  }

  _renderPaginationItems() {
    if (this.props.moviesCount < this.props.pagingSize) {
      return null;
    }
    const range = [];
    console.log(this.props.moviesCount);
    for (let i = 1; i <= Math.ceil(this.props.moviesCount / this.props.pagingSize); i++) {
      range.push(i);
    }

    return range.map(v => {
      const isCurrent = v === this.props.currentPage;
      if (v === 1 || v === Math.ceil(this.props.moviesCount / this.props.pagingSize) || (v >= this.props.currentPage - 2 && v <= this.props.currentPage + 2)) {
        return(
          <li
            key={v}
            onClick={() => this.props.changePage(v)}
            className={ isCurrent ? 'Pagination__item Pagination__item--active' : 'Pagination__item' }
            >
            {v}
          </li>
        );
      } else {
        return null;
      }
    });
  }

  render() {
    console.log(this._renderPaginationItems());
    return (
      <nav>
        <ul className="Pagination">
          <li onClick={() => {this._handleMoveLeft()}}>&laquo;</li>
            {this._renderPaginationItems()}
          <li onClick={() => {this._handleMoveRight()}}>&raquo;</li>
        </ul>
      </nav>
    )
  }
}

ListPagination.propTypes = {
  //movies: PropTypes.array,
  currentPage: PropTypes.number,
  moviesCount: PropTypes.number,
  pagingSize: PropTypes.number,
}

function mapStateToProps(state) {
  console.log('state: ', state);
  return {
    currentPage: state.currentPage,
    moviesCount: state.moviesCount,
    pagingSize: state.pagingSize,
  }
}

export default connect(
  mapStateToProps,
  { changePage }
)(ListPagination);
