import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './assets/css/reset.css';
import './assets/css/typography.css';
import Root from './Root';
require('dotenv').config();

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root')
);