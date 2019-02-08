import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'

import Header from './Header/Header'
import LoginForm from './LoginForm/LoginForm'
import Footer from './Footer/Footer'
import Homepage from './Homepage/Homepage'
import { Card } from './common'

import './App.module.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header></Header>
            <Route path="/" exact component={Homepage}></Route>
            <Route path="/login" component={LoginForm}></Route>
          <Footer></Footer>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;