import { combineReducers } from 'redux';

import currentUserReducer from './currentUser';
import authReducer from './auth';
import usersReducer from './users';

export default combineReducers({
  currentUser: currentUserReducer,
  auth: authReducer,
  users: usersReducer
});