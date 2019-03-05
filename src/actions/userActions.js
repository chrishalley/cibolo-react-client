import api from '../apis/api';

import { ADD_USER } from './types';

export const addUser = (user, callback) => (dispatch) => {
  api.post('/users', user)
    .then(res => {
      console.log(res)
      callback('hello')
    })
    .catch(e => {
      console.log(e)
    });
};