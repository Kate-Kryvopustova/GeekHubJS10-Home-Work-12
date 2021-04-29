import { takeEvery, put, call } from 'redux-saga/effects';
import { requestPandaError, requestPandaSuccess } from './actions';
import { urlAnimal, panda } from '../../services/dataAnimals';

export function* watchFetchPanda() {
  yield takeEvery('REQUESTED_PANDA', fetchPandaAsync);
}

function* fetchPandaAsync(): any {
  try {
    const data = yield call(() => {
      return fetch(`${ urlAnimal }/${ panda }`)
        .then(res => res.json()
      );
    });
    yield put(requestPandaSuccess(data));
  } catch (error) {
    yield put(requestPandaError());
  }
}
