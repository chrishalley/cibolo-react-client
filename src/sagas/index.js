import usersSagas from './users';
import authSagas from './auth';

import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    ...usersSagas,
    ...authSagas
  ])
};