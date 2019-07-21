import { takeEvery, fork, put, call } from 'redux-saga/effects';
import jwt from 'jsonwebtoken';

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
  try {
    const response = yield api.post("/auth/login", { email, password });
    const { exp } = jwt.decode(response.headers["x-token"]);

    localStorage.setItem('token', response.headers['x-token']);
    localStorage.setItem('refreshToken', response.headers['x-refresh-token']);

    yield put(actions.changeAuth({
      initAuthComplete: true,
      user: response.data,
      tokenExpiry: exp * 1000,
      token: response.headers['x-token']
    }));
    cb(true);
  } catch(e) {
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

