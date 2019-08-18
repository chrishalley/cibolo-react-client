import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleWare from 'redux-saga';
import reducers from './reducers';

import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleWare();
const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export default ({
  children
}) => (
  <Provider store={store}>
    {children}
  </Provider>
);