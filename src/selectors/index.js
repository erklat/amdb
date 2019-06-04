import { createSelector } from 'reselect';

const getCurrentPage = (state) => state.currentPage;
const getMovies = (state) => state.movies;
const getPagingSize = (state) => state.pagingSize;

export const getVisibleMovies = createSelector(
  [ getCurrentPage, getMovies, getPagingSize ],
  (currentPage, movies, pagingSize) => {
    console.log('selectors', currentPage, movies.slice(pagingSize * (currentPage - 1), pagingSize * currentPage));
    return movies.slice(pagingSize * (currentPage - 1), pagingSize * currentPage);
  }
)
