import { takeEvery, takeLatest, fork, put, call } from 'redux-saga/effects';
import * as Types from '../actions/types';
import { getUsersSuccess, updateUserSuccess } from '../actions';
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
};

function* watchGetUsers() {
  yield takeEvery(Types.GET_USERS, getUsers);
};

function* addUser(action) {
  const { payload: { user }, callbackSuccess, callbackFail } = action
  try {
    yield api.post(`/users`, user)
    yield call(getUsers)
    callbackSuccess()
  } catch (e) {
    callbackFail(e)
  }
  yield;
};



function* watchAddUser() {
  yield takeLatest(Types.ADD_USER_REQUEST, addUser);
};

function* updateUser(action) {
  const { payload: { user }, callbackSuccess, callbackFail } = action
  try {
    const response = yield api.patch(`/users/${user._id}`, user);
    console.log(response);
    yield call(getUsers);
    callbackSuccess()
  } catch(e) {
    console.log('updateUser saga error:', e);
    callbackFail()
  } 
}

function* watchUpdateUser() {
  yield takeLatest(Types.UPDATE_USER_REQUEST, updateUser);
};

const usersSagas = [
  fork(watchGetUsers),
  fork(watchAddUser),
  fork(watchUpdateUser),
];

export default usersSagas;