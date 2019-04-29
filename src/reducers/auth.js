import { CHANGE_AUTH_FAIL, CHANGE_AUTH_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  currentUser: null,
  initAuthComplete: false
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_AUTH_FAIL:
      console.log('change_auth_fail')
      return {...state}
    case CHANGE_AUTH_SUCCESS:
      console.log('change_auth_success', action)
      return {
        ...state,
        ...action.payload
      }
    default:
      return {...state};
  }
}