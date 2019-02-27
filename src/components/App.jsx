import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import { connect } from 'react-redux';

import { initAuth } from '../actions'
import Root from '../screens/Root'

import styles from './App.module.css'

class App extends Component {
  componentDidMount() {
    // try to get token from localstorage
    this.props.initAuth()
      .then(() => {})
      .catch((e) => { console.log(e) })  
  }

  render() {
    return (
      <div id="app" className={styles.app}>
        <Router>
          <Root></Root>
        </Router>
      </div>
    )
  }
}

export default connect(null, { initAuth })(App);