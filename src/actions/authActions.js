import { CHANGE_AUTH_FAIL,
  INIT_AUTH_REQUEST,
  CHANGE_AUTH_SUCCESS,
  LOGIN_REQUEST,
  SET_PASSWORD_REQUEST
} from './types';

import api from '../apis/api'

export const loginRequest = ({ email, password }, cb) => ({
  type: LOGIN_REQUEST,
  payload: {
    email,
    password,
    cb
  }
})

export const changeAuth = ({ user, initAuthComplete, tokenExpiry, token }) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return {
    type: CHANGE_AUTH_SUCCESS,
    payload: {
      user,
      initAuthComplete,
      tokenExpiry
    }
  }
}

export const initAuthRequest = () => ({
  type: INIT_AUTH_REQUEST
})

export const initAuthSuccess = () => {
  console.log('initAuthSuccess()');
  return {};
}

export const initAuthFail = () => {
  console.log('initAuthFail()');
  return {};
}

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
  return {
    type: CHANGE_AUTH_FAIL,
    payload: null
  }
};

export const setPasswordRequest = ({
  password,
  token
}) => ({
  type: SET_PASSWORD_REQUEST,
  payload: {
    password,
    token
  }
})