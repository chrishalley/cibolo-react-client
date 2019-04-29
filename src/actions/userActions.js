import api from '../apis/api';

import { GET_USERS, GET_USERS_SUCCESS } from './types';

//* KEEP this one, works with Redux-Saga
export const getUsers = () => {
  return {
    type: GET_USERS
  }
}

export const getUsersSuccess = ({ users }) => {
  console.log('in getUsersSuccess()');
  return {
    type: GET_USERS_SUCCESS,
    payload: {
      users
    }
  }
}

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
