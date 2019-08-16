import { GET_EVENTS_SUCCESS } from '../actions/types';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_EVENTS_SUCCESS:
      return [ ...state, ...action.payload.events ];
    default:
      return [ ...state ];
  }
}