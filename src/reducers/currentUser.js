import { CHANGE_AUTH } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case CHANGE_AUTH:
      console.log('reducer: ', action.payload)
      return action.payload !== null ? { ...action.payload } : null
    default:
      return state
  }
}