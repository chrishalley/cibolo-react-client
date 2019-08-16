import React, { useEffect } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from '../assets/theme/theme';
import { initAuthRequest } from '../actions';
import Root from '../screens/Root';

import { Spinner } from '../components/common';

import styles from './App.module.css';

const App = ({
  initAuthRequest,
  initAuthComplete
}) => {

  useEffect(() => {
    initAuthRequest()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <div id="app" className={styles.app}>
        {
          initAuthComplete ? (
            <Router>
              <Root />
            </Router>
          ) : (
            <Spinner />
          )
        }
      </div>
    </ThemeProvider>
  );
}

const mapStateToProps = state => ({ initAuthComplete: state.auth.initAuthComplete });

export default connect(mapStateToProps, { initAuthRequest })(App);