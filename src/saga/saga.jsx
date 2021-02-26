import {takeEvery, put, call} from 'redux-saga/effects';
import { requestDogError, requestDogSuccess, requestDog } from '../actions/actions'

export function* watchFetchDog() {
  yield takeEvery("FETCH_DOG", fetchDogAsync);
}

function* fetchDogAsync() {
  try {
    yield put(requestDog());
    const data = yield call(() => {
      return fetch("https://dog.ceo/api/breeds/image/random").then(res =>
        res.json()
      );
    });
    yield put(requestDogSuccess(data));
  } catch (error) {
    yield put(requestDogError());
  }
}