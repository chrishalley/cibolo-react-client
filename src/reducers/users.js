import { GET_USERS, GET_USERS_SUCCESS } from '../actions/types';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_USERS_SUCCESS:
      return [...action.payload.users];
    default:
      return [...state];
  }
}