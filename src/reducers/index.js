import { API_CALL_REQUEST } from '../constants/action-types';
import { API_CALL_SUCCESS } from '../constants/action-types';
import { API_CALL_FAILURE } from '../constants/action-types';
import { PAGE_CHANGED } from '../constants/action-types';
import { TOGGLE_MENU } from '../constants/action-types';
import { SET_SORT_PARAMS } from '../constants/action-types';
import { CLOSE_ALERT } from '../constants/action-types';

const initialState = {
  movies: [],
  fetching: false,
  error: null,
  currentPage: 1,
  moviesCount: 0,
  pagingSize: 12,
  menuActive: false,
  sortParams: {},
};

function rootReducer(state = initialState, action) {
  console.log('action: ', action);
  switch(action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null, }
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, error: null, movies: state.movies.concat(action.payload), moviesCount: action.payload.length }
    case API_CALL_FAILURE:
      return { ...state, fetching: false, error: action.error }
    case PAGE_CHANGED:
      return { ...state, currentPage: action.payload }
    case TOGGLE_MENU:
      return { ...state, menuActive: !state.menuActive }
    case SET_SORT_PARAMS:
      return { ...state, sortParams: action.payload }
    case CLOSE_ALERT:
      return { ...state, error: action.payload }
    default:
      return state;
  }
}

export default rootReducer;
