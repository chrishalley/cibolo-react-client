import { GET_EVENTS_REQUEST, GET_EVENTS_SUCCESS } from './types';

export const getEventsRequest = () => ({
  type: GET_EVENTS_REQUEST
})

export const getEventsSuccess = ({ events }) => {
  return {
    type: GET_EVENTS_SUCCESS,
    payload: {
      events
    }
  }
};