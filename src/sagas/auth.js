import { takeEvery, fork, put } from 'redux-saga/effects';
import jwt from 'jsonwebtoken';
import { get } from 'lodash'

import * as Types from '../actions/types';
import * as actions from '../actions';
import api from '../apis/api';

function* initAuth() {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      yield put(actions.changeAuth({
        initAuthComplete: true,
        user: null
      }));
    } else {
      const { id, exp } = jwt.decode(token);
      const response = yield api.get(`/users/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      yield put(actions.changeAuth({
        initAuthComplete: true,
        user: response.data,
        tokenExpiry: exp * 1000,
        token: token
      }))
    }
    
  } catch(e) {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    yield put(actions.changeAuth({
        initAuthComplete: true,
        user: null
      }));
  }
};

function* watchInitAuthRequest() {
  yield takeEvery(Types.INIT_AUTH_REQUEST, initAuth);
};

function* login(action) {
  const { email, password, cb } = action.payload;
  console.log({email,password, cb})
  try {
    const { data } = yield api.post("/auth/login", { email, password });
    const token = get(data, 'tokens[0].token')

    if (token) {
      const { exp } = jwt.decode(token);
      localStorage.setItem('token', token)
      yield put(actions.changeAuth({
        initAuthComplete: true,
        user: data,
        tokenExpiry: exp * 1000,
        token
      }));
      cb(true);
    }
    console.log('try')

  } catch(e) {
    console.log(e)
    cb(false);
  }
  yield;
};

function* watchLoginRequest() {
  yield takeEvery(Types.LOGIN_REQUEST, login);
};

const authSagas = [
  fork(watchInitAuthRequest),
  fork(watchLoginRequest)
];

export default authSagas;

