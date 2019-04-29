import { takeEvery, fork } from 'redux-saga/effects';
import * as Types from '../actions/types';
import api from '../apis/api';

function* getUsers() {
  try {

  } catch(e) {

  }
}

function* watchGetUsers() {
  yield takeEvery(Types.GET_USERS, getUsers)
}

const usersSagas = [
  fork(watchGetUsers)
];

export default usersSagas;