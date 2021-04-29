import {takeEvery, put, call} from 'redux-saga/effects';
import { requestBirbError, requestBirbSuccess } from './actions';
import { urlAnimal, birb } from '../../services/dataAnimals';

export function* watchFetchBirb() {
  yield takeEvery('REQUESTED_BIRB', fetchBirbAsync);
}

function* fetchBirbAsync(): any {
  try {
    const data = yield call(() => {
      return fetch(`${ urlAnimal }/${ birb }`)
        .then(res => res.json()
      );
    });
    yield put(requestBirbSuccess(data));
  } catch (error) {
    yield put(requestBirbError());
  }
}
