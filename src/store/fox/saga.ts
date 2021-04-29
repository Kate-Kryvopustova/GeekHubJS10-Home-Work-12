import { takeEvery, put, call } from 'redux-saga/effects';
import { requestFoxError, requestFoxSuccess } from './actions';
import { urlAnimal, fox } from '../../services/dataAnimals';

export function* watchFetchFox() {
  yield takeEvery('REQUESTED_FOX', fetchFoxAsync);
}

function* fetchFoxAsync(): any {
  try {
    const data = yield call(() => {
      return fetch(`${ urlAnimal }/${ fox }`)
        .then(res => res.json());
    });
    yield put(requestFoxSuccess(data));
  } catch (error) {
    yield put(requestFoxError());
  }
}
