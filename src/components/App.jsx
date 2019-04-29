import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from '../assets/theme/theme';
import { initAuthRequest } from '../actions';
import Root from '../screens/Root';

import { Spinner } from '../components/common';

import styles from './App.module.css';

class App extends Component {

  state = { initAuthComplete: false };

  componentDidMount() {
    // try to get token from localstorage
    this.props.initAuthRequest()
      // .then(() => {
      //   this.setState({ initAuthComplete: true })
      // })
      // .catch((e) => { 
      //   console.log('initAuthError: ', e)
      //   this.setState({ initAuthComplete: true })
      // });
  }

  renderApp = () => this.props.initAuthComplete ? <Router><Root></Root></Router> : <Spinner></Spinner>

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div id="app" className={styles.app}>
          {this.renderApp()}
        </div>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => ({ initAuthComplete: state.auth.initAuthComplete });

export default connect(mapStateToProps, { initAuthRequest })(App);