import api from '../apis/api';

import {  } from './types';

export const addUser = (user, callback) => (dispatch) => {
  api.post('/users', user)
    .then(res => {
      callback(res.data);
    })
    .catch(e => {
      console.log(e);
    });
};

export const updateUser = (user, callback) => (dispatch) => {
  console.log('action user:', user);
  api.patch(`/users/${user._id}`, (user))
    .then(res => {
      callback(user);
    })
    .catch(e => {
      console.log(e);
    })
}

export const deleteUser = (id, callback) => (dispatch) => {
  api.delete(`/users/${id}`)
    .then(res => {
      callback(id);
    })
    .catch(e => {
      console.log(e);
    })
}
