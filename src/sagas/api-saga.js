import { takeEvery, call, put, all } from 'redux-saga/effects';
import config from '../config.js';

export default function* watcherSaga() {
  yield takeEvery('API_CALL_REQUEST', workerSaga);
}

const destructuredResponse = [];

function* workerSaga() {
  try {
    /*
     * 40 api calls/10 seconds limit
     * no /get/all route, we need to iterate over all movies and fetch them by ID
     * approximately ~25hrs to complete, MANY api calls since there are 418000 results
     * set limit to 20 pages ordered by highest rating, enough to complete this assignment
     * fetching a range of posts because I assume pagination with reselect is of interest
     * instead of using API pagination
     */
    const maxPages = [...Array(20).keys()];
    let payload = yield all(
        maxPages.map(page => call(fetchMovies, ++page)
      )
    );
    payload = destructuredResponse;
    yield put({ type: 'API_CALL_SUCCESS', payload });
  } catch (e) {
    yield put({ type: 'API_CALL_FAILURE', payload: e });
  }
}

function fetchMovies(page) {
  return fetch(`${config.API_URL}/discover/movie?api_key=${config.API_KEY}&page=${page}&`)
    .then(response => response.json())
    .then(response => {
      response.results.map(movie => destructuredResponse.push(movie));
    });
}
