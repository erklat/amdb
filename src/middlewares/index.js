import { SET_SORT_PARAMS } from '../constants/action-types';
import { sortMovies, sortSelector } from '../selectors/index';
import { get } from 'lodash';

export function sortMoviesMiddleware({ getState, dispatch }) {

  return function(next) {
    return function(action) {
        console.log(action);
        if (action.type === SET_SORT_PARAMS) {
          console.log('SORT MIDDLEWARE', action.payload);
          // sortSelector(action.payload);
          dispatch({
            type: 'SORT_MOVIES',
            payload: sortMovies(getState(), action.payload)
          })
          // dispatch({
          //   type: SET_SORT_PARAMS,
          //   payload: {
          //     data: {
          //       // key: sortKey,
          //       // order: order === 'desc' ? 'desc' : 'asc',
          //       // type: sortType
          //     }
          //   }
          // })
          // const { sortParams } = getState().sortParams;
          // console.log(sortParams);
          // const order = get(sortParams, 'order');
          // dispatch({
          //   type: SET_SORT_PARAMS,
          //   payload: {
          //     data: {
          //       // key: sortKey,
          //       // order: order === 'desc' ? 'desc' : 'asc',
          //       // type: sortType
          //     }
          //   }
          // })
        }

      // if (action.type === SET_SORT_PARAMS) {
      //   const state = getState();
      //   console.log(state.sortParams, action.payload);
      //   return false;
      //   if (state.sortParams !== action.payload) {
      //     return dispatch({ type: 'SET_SORT_PARAMS', payload: action.payload })
      //   }
      //   console.log('in middleware', action);
      //   // console.log(state);
      //   // console.log('SORTIRANI: ', sortMovies(state));
      //   // return dispatch({ type: 'SORT_MOVIES', payload: sortMovies(state) })
      // }
      return next(action);
    }
  }
}
