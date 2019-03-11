import React from 'react';
import { Provider } from 'react-redux';
import { createStore ,applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default (props) => {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  );
};