import { CHANGE_AUTH_FAIL, CHANGE_AUTH_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  currentUser: null,
  initAuthComplete: false
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_AUTH_FAIL:
      return {...state}
    case CHANGE_AUTH_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return {...state};
  }
}