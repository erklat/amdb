import React from 'react';
import { connect } from 'react-redux';
import { changePage } from '../actions/index';
import PropTypes from 'prop-types';

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
    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
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


  componentDidUpdate(prevProps, prevState) {
    if (this.props.moviesCount !== prevProps.moviesCount) {
      this._setPage(this.props.currentPage);
    }
  }

  render() {
    let pager = this.state.pager;

    if (!pager.pages || pager.pages <= 1) {
      return null;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="Pagination">
              <li className={`Pagination__item ${pager.currentPage === 1 ? 'Pagination__item--disabled' : ''}`} onClick={() => this._setPage(1)}>
                First
              </li>
              <li className={`Pagination__item ${pager.currentPage === 1 ? 'Pagination__item--disabled' : ''}`} onClick={() => this._setPage(pager.currentPage - 1)}>
                Prev
              </li>
              {pager.pages.map((page, index) => {
                return(
                  <li key={index} className={`Pagination__item ${pager.currentPage === page ? 'Pagination__item--active' : ''}`} onClick={() => this._setPage(page)}>
                    {page}
                  </li>
                )
              })}
              <li className={`Pagination__item ${pager.currentPage === pager.totalPages ? 'Pagination__item--disabled' : ''}`} onClick={() => this._setPage(pager.currentPage + 1)}>
                Next
              </li>
              <li className={`Pagination__item ${pager.currentPage === pager.totalPages ? 'Pagination__item--disabled' : ''}`} onClick={() => this._setPage(pager.totalPages)}>
                Last
              </li>
            </ul>
          </div>
        </div>
      </div>
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
