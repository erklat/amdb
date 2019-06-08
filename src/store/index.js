import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
import apiSaga from '../sagas/api-saga';
import { sortMoviesMiddleware } from '../middlewares/index'

const initSagaMiddleware = createSagaMiddleware();

const storeEnhancers = compose;

const store = createStore(
  rootReducer,
  storeEnhancers(
    applyMiddleware(initSagaMiddleware, sortMoviesMiddleware)
  )
);

initSagaMiddleware.run(apiSaga);

export default store;
