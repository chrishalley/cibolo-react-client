import jwt from 'jsonwebtoken';

import { CHANGE_AUTH_FAIL, INIT_AUTH_REQUEST, CHANGE_AUTH_SUCCESS, LOGIN_REQUEST } from './types';
import api from '../apis/api'

// export const changeAuth = ({ email, password }) => dispatch => {
//   return new Promise((resolve, reject) => {
//     api.post('/auth/login', { email, password })
//       .then(res => {
//         const { exp } = jwt.decode(res.headers['x-token'])
//         dispatch({ type: CHANGE_AUTH, payload: { ...res.data, tokenExpiry: exp * 1000 } })
//         localStorage.setItem('token', res.headers['x-token'])
//         localStorage.setItem('refreshToken', res.headers['x-refresh-token'])
//         api.defaults.headers.common['Authorization'] = `Bearer ${res.headers['x-token']}`;
//         resolve(res.data)
//       })
//       .catch(e => {
//         reject(e)
//       })
//   })
// }

// * KEEP THIS - Works with switch to Redux-Saga
export const loginRequest = ({ email, password }) => ({
  type: LOGIN_REQUEST,
  payload: {
    email,
    password
  }
})

// * KEEP THIS - Works with switch to Redux-Saga
export const changeAuth = ({ user, initAuthComplete, tokenExpiry, token }) => {
  console.log('changeAuth() action');
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

// export const initAuth = () => dispatch => {
//   return new Promise((resolve, reject) => {

//     // Get token from localStorage
//     const token = localStorage.getItem('token');
//     if (!token) { // If there is no token, resolve
//       resolve();
//     } else { // Pull id and exp off token and validate
//       const { id, exp } = jwt.decode(token);
//       if (!id || !exp || exp * 1000 < new Date().getTime()) {
//         // Token has expired, log user out
//         logout();
//         resolve();
//       } else { // Token is valid, retrieve user details from database
//         api.get(`/users/${id}`, {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         })
//           .then(res => {
//             dispatch({ type: CHANGE_AUTH, payload: { ...res.data, tokenExpiry: exp * 1000 } })
//             api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//             resolve();
//           })
//           .catch(e => {
//             reject(e);
//           });
//       }
//     }
//   });
// };

// * KEEP THIS - Works with switch to Redux-Saga
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