import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import Root from '../screens/Root'

import styles from './App.module.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.app}>
          <Header></Header>
          <Root></Root>
          <Footer></Footer>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;