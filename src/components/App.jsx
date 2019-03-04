import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import { connect } from 'react-redux';

import { initAuth } from '../actions'
import Root from '../screens/Root'

import { Spinner } from '../components/common'

import styles from './App.module.css'

class App extends Component {

  state = { initAuthComplete: false }

  componentDidMount() {
    console.log('app mounted')
    // try to get token from localstorage
    this.props.initAuth()
      .then(() => {
        console.log('initAuthComplete')
        this.setState({ initAuthComplete: true })
      })
      .catch((e) => { 
        console.log('initAuthError: ', e)
        this.setState({ initAuthComplete: true })
      })  
  }

  renderApp = () => this.state.initAuthComplete ? <Router><Root></Root></Router> : <Spinner></Spinner>

  render() {
    return (
      <div id="app" className={styles.app}>
        {this.renderApp()}
      </div>
    )
  }
}

export default connect(null, { initAuth })(App);