import { takeEvery, fork, put, call } from 'redux-saga/effects';
import { GET_EVENTS_REQUEST } from '../actions/types';
import { getEventsSuccess } from '../actions';

import events from '../components/EventsByMonth/events';

function* getEvents() {
  console.log('get events saga');
  // Todo: Normally would make an api call here to return events from DB, for now using dummy static data
  try {
    yield put(getEventsSuccess({ events }));

  } catch(e) {
    console.log('getEvents() saga error:', e);
  }
}

function* watchGetEvents() {
  yield takeEvery(GET_EVENTS_REQUEST, getEvents);
}

const eventsSagas = [
  fork(watchGetEvents)
];

export default eventsSagas;

