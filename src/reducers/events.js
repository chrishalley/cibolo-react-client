import { GET_EVENTS_SUCCESS } from '../actions/types';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_EVENTS_SUCCESS:
      console.log('getEventsSuccess reducer')
      return [ ...state, ...action.payload.events ];
    default:
      return [ ...state ];
  }
}