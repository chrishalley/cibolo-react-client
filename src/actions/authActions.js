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
    if (!token) {
      console.log('no token')
      reject('reject: no token')
    }
    // Check if token has not expired
    const { id, exp } = jwt.decode(token);
    if (exp * 1000 < new Date().getTime()) {
      // Token has expired
      console.log('token has expired')
      reject()
    }
    console.log(id, exp)
    dispatch({ type: CHANGE_AUTH, payload: { _id: id, tokenExpiry: exp * 1000 } })
  
    // If token has not expired, get user info from DB and set in Redux store
    api.get(`/users/${id}`)
      .then(res => {
        dispatch({ type: CHANGE_AUTH, payload: { ...res.data, tokenExpiry: exp * 1000 } })
        resolve(res.data);
      })
      .catch(e => {
        console.log(e)
        reject(e);
      })
  })
}

// export const changeAuth = (payload) => {
//   return {
//     type: CHANGE_AUTH,
//     payload: payload
//   }
// }

export const logout = () => {
  console.log('logout')
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
  return {
    type: CHANGE_AUTH,
    payload: null
  }
}