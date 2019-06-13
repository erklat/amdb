import React from 'react';
import { connect } from 'react-redux';
import { changePage } from '../actions/index';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export class ListPagination extends React.Component {
  state = {
    pager: {}
  }

  _setPage(page) {
    let pageSize = this.props.pagingSize;
    let items = this.props.moviesCount;
    let pager = this.state.pager;

    if (page < 1 || page > pager.totalPages) {
      return false;
    }

    pager = this._getPager(items, page, pageSize);

    this.setState({ pager: pager });

    this.props.changePage(page);
  }

  _getPager(totalItems, currentPage, pageSize) {
    currentPage = currentPage || this.props.currentPage;

    pageSize = pageSize || this.props.pageSize;

    let totalPages = Math.ceil(this.props.moviesCount / this.props.pagingSize);

    let startPage, endPage;
    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 3 > totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    let pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  }

  _shouldItemDisplay(page) {
    /*
    * this method contains logic that returns visible classes
    + that correspond to styles in pagination.scss
    */
    let pager = this.state.pager;

    if (!pager.pages || pager.pages <= 1) {
      return false;
    }

    if (pager.currentPage === page) {
      return 'is-active';
    }

    if (
      pager.currentPage - 1 === page ||
      pager.currentPage + 1 === page ||
      (pager.currentPage === 1 && pager.currentPage + 2 === page) ||
      (pager.currentPage === pager.totalPages && pager.currentPage - 2 === page)
    ) {
      return 'is-visible';
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.moviesCount !== prevProps.moviesCount) {
      this._setPage(this.props.currentPage);
    }
  }

  componentDidMount() {
    if (this.props.moviesCount) {
      this._setPage(this.props.currentPage);
    }
  }

  render() {
    let pager = this.state.pager;

    if (!pager.pages || pager.pages <= 1) {
      return null;
    }

    return (
      <ul className="Pagination">
        <li className={`Pagination__item ${pager.currentPage === 1 ? 'Pagination__item--is-disabled' : ''}`} onClick={() => this._setPage(1)}>
          <FontAwesomeIcon icon={faChevronLeft} />
          <FontAwesomeIcon icon={faChevronLeft} />
        </li>
        <li className={`Pagination__item ${pager.currentPage === 1 ? 'Pagination__item--is-disabled' : ''}`} onClick={() => this._setPage(pager.currentPage - 1)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </li>
        {pager.pages.map((page, index) => {
          return(
            <li key={index} className={`Pagination__item ${typeof this._shouldItemDisplay(page) !== 'undefined' ? 'Pagination__item--' + this._shouldItemDisplay(page) : ''}`} onClick={() => this._setPage(page)}>
              {page}
            </li>
          )
        })}
        <li className={`Pagination__item ${pager.currentPage === pager.totalPages ? 'Pagination__item--is-disabled' : ''}`} onClick={() => this._setPage(pager.currentPage + 1)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </li>
        <li className={`Pagination__item ${pager.currentPage === pager.totalPages ? 'Pagination__item--is-disabled' : ''}`} onClick={() => this._setPage(pager.totalPages)}>
          <FontAwesomeIcon icon={faChevronRight} />
          <FontAwesomeIcon icon={faChevronRight} />
        </li>
      </ul>
    )
  }
}

ListPagination.propTypes = {
  currentPage: PropTypes.number,
  moviesCount: PropTypes.number,
  pagingSize: PropTypes.number,
}

function mapStateToProps(state) {
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
