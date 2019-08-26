import api from '../apis/api';

import { GET_USERS, GET_USERS_SUCCESS, ADD_USER_REQUEST, ADD_USER_SUCCESS, UPDATE_USER_REQUEST } from './types';

export const getUsers = () => ({
  type: GET_USERS
})

export const getUsersSuccess = ({ users }) => ({
  type: GET_USERS_SUCCESS,
  payload: {
    users
  }
})

export const addUserRequest = ({ payload: { user }, callbackSuccess, callbackFail }) => ({
  type: ADD_USER_REQUEST,
  payload: {
    user
  },
  callbackSuccess,
  callbackFail
});

export const addUserSuccess = ({ user }) => ({
  type: ADD_USER_SUCCESS,
  payload: {
    user
  }
})

export const updateUserRequest = ({ payload: { user }, callbackSuccess, callbackFail }) => {
  console.log(user, callbackSuccess, callbackFail)
  return ({
  type: UPDATE_USER_REQUEST,
  payload: {
    user
  },
  callbackSuccess,
  callbackFail
})};

// TODO: Move over to Redux Saga
export const deleteUser = (id, callback) => (dispatch) => {
  api.delete(`/users/${id}`)
    .then(res => {
      callback(id);
    })
    .catch(e => {
      console.log(e);
    })
}
