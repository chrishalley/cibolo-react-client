import api from '../apis/api';

import { GET_USERS, GET_USERS_SUCCESS, ADD_USER_REQUEST, ADD_USER_SUCCESS, UPDATE_USER_REQUEST } from './types';

//* KEEP this one, works with Redux-Saga
export const getUsers = () => {
  return {
    type: GET_USERS
  }
}

//* KEEP this one, works with Redux-Saga
export const getUsersSuccess = ({ users }) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: {
      users
    }
  }
}

// TODO: Needs to be COMPLETED
//* KEEP this one, works with Redux-Saga
export const addUserRequest = () => ({
  type: ADD_USER_REQUEST
});

export const addUserSuccess = ({ user }) => ({
  type: ADD_USER_SUCCESS,
  payload: {
    user
  }
})
// TODO

export const updateUserRequest = ({ updatedUser }, cb) => ({
  type: UPDATE_USER_REQUEST,
  payload: {
    updatedUser,
    cb
  }
});


// export const addUser = (user, callback) => (dispatch) => {
//   api.post('/users', user)
//     .then(res => {
//       callback(res.data);
//     })
//     .catch(e => {
//       console.log(e);
//     });
// };

// export const updateUser = (user, callback) => (dispatch) => {
//   console.log('action user:', user);
//   api.patch(`/users/${user._id}`, (user))
//     .then(res => {
//       callback(user);
//     })
//     .catch(e => {
//       console.log(e);
//     })
// }

export const deleteUser = (id, callback) => (dispatch) => {
  api.delete(`/users/${id}`)
    .then(res => {
      callback(id);
    })
    .catch(e => {
      console.log(e);
    })
}
