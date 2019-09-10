import { GET_USERS, GET_USERS_SUCCESS, ADD_USER_REQUEST, ADD_USER_SUCCESS, UPDATE_USER_REQUEST, DELETE_USER_REQUEST } from './types';

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

export const updateUserRequest = ({ payload: { user }, callbackSuccess, callbackFail }) => ({
  type: UPDATE_USER_REQUEST,
  payload: {
    user
  },
  callbackSuccess,
  callbackFail
});

export const deleteUserRequest = ({payload: { userId }, callbackSuccess, callbackFail }) => ({
  type: DELETE_USER_REQUEST,
  payload: {
    userId
  },
  callbackSuccess,
  callbackFail
});
