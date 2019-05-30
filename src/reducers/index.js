import { API_CALL_REQUEST } from '../constants/action-types';
import { API_CALL_SUCCESS } from '../constants/action-types';
import { API_CALL_FAILURE } from '../constants/action-types';

const initialState = {
  movies: [],
  fetching: false,
  error: null,
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null, }
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, error: null, movies: state.movies.concat(action.payload) }
    case API_CALL_FAILURE:
      return { ...state, fetching: false, error: action.error }
    default:
      return state;
  }
}

export default rootReducer;
