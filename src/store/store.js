import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/reducers';
import createSagaMiddleware from "redux-saga";
import {watchFetchDog} from '../saga/saga';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(watchFetchDog);

export default store;