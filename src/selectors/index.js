import { createSelector } from 'reselect';
import { get, orderBy } from "lodash";

const getCurrentPage = (state) => state.currentPage;
const getMovies = (state) => state.movies;
const getPagingSize = (state) => state.pagingSize;
const sortSelector = (state) => state.sortParams;

function orderByType(data, type) {
  switch (type) {
    case 'date':
      return Date.parse(data);
    default:
      return data;
  }
}

const sortMovies = createSelector(
  getMovies,
  sortSelector,
  (movies, sortParams) => {
    if (sortParams) {
      return orderBy(
        movies,
        c => orderByType(get(c, sortParams.key), sortParams.type),
        [sortParams.order || 'desc' ]
      )
    }
    return movies;
  }
)

export const getVisibleMovies = createSelector(
  [ getCurrentPage, sortMovies, getPagingSize, ],
  (currentPage, movies, pagingSize) => {
    return movies.slice(pagingSize * (currentPage - 1), pagingSize * currentPage);
  }
)
