import jwt from 'jsonwebtoken';

import { CHANGE_AUTH } from './types';
import api from '../apis/api'

export const changeAuth = ({ email, password }) => dispatch => {
  return new Promise((resolve, reject) => {
    api.post('/auth/login', { email, password })
      .then(res => {
        const { exp } = jwt.decode(res.headers['x-token'])
        dispatch({ type: CHANGE_AUTH, payload: { ...res.data, tokenExpiry: exp * 1000 } })
        localStorage.setItem('token', res.headers['x-token'])
        localStorage.setItem('refreshToken', res.headers['x-refresh-token'])
        api.defaults.headers.common['Authorization'] = `Bearer ${res.headers['x-token']}`;
        resolve(res.data)
      })
      .catch(e => {
        reject(e)
      })
  })
}

export const initAuth = () => dispatch => {
  return new Promise((resolve, reject) => {

    // Get token from localStorage
    const token = localStorage.getItem('token');
    if (!token) { // If there is no token, resolve
      resolve();
    } else { // Pull id and exp off token and validate
      const { id, exp } = jwt.decode(token);
      if (!id || !exp || exp * 1000 < new Date().getTime()) {
        // Token has expired, log user out
        logout();
        resolve();
      } else { // Token is valid, retrieve user details from database
        api.get(`/users/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
          .then(res => {
            dispatch({ type: CHANGE_AUTH, payload: { ...res.data, tokenExpiry: exp * 1000 } })
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            resolve();
          })
          .catch(e => {
            reject(e);
          });
      }
    }
  });
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
  Promise.resolve();
  return {
    type: CHANGE_AUTH,
    payload: null
  }
};