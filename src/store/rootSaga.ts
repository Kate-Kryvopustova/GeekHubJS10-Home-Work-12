import { all } from 'redux-saga/effects';
import { watchFetchFox } from './fox/saga';
import { watchFetchPanda } from './panda/saga';
import { watchFetchBirb } from './birb/saga';

export default function* rootSaga() {
  yield all([
    watchFetchBirb(),
    watchFetchPanda(),
    watchFetchFox()
  ])
}
