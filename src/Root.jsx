import React from 'react';
import { Provider } from 'react-redux';
import { createStore ,applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';

import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleWare();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default (props) => {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  );
};