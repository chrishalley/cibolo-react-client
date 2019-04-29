import { combineReducers } from 'redux';

import currentUserReducer from './currentUser';
import authReducer from './auth';

export default combineReducers({
  currentUser: currentUserReducer,
  auth: authReducer
});