import { takeEvery, fork, put } from 'redux-saga/effects';
import * as Types from '../actions/types';
import { getUsersSuccess } from '../actions';
import api from '../apis/api';

function* getUsers() {
  try {
    const response = yield api.get('/users')
    yield put(getUsersSuccess({
      users: response.data
    }));
  } catch(e) {
    console.log('getUsers catch', e);
  }
}

function* watchGetUsers() {
  yield takeEvery(Types.GET_USERS, getUsers)
}

const usersSagas = [
  fork(watchGetUsers)
];

export default usersSagas;