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
    yield api.patch(`/users/${user._id}`, user);
    yield call(getUsers);
    callbackSuccess()
  } catch(e) {
    callbackFail()
  } 
}

function* watchUpdateUser() {
  yield takeLatest(Types.UPDATE_USER_REQUEST, updateUser);
};

function* deleteUser(action) {
  const { payload: { userId }, callbackSuccess, callbackFail } = action;
  try {
    yield api.delete(`/users/${userId}`);
    yield call(getUsers);
    callbackSuccess()
  } catch(e) {
    callbackFail()
  }
  yield
}

function* watchDeleteUser() {
  yield takeLatest(Types.DELETE_USER_REQUEST, deleteUser)
}

const usersSagas = [
  fork(watchGetUsers),
  fork(watchAddUser),
  fork(watchUpdateUser),
  fork(watchDeleteUser),
];

export default usersSagas;