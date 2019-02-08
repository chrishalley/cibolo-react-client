import React, { Component } from 'react';

import Header from './Header/Header'
import LoginForm from './LoginForm/LoginForm'
import Footer from './Footer/Footer'
import { Card } from './common'

import './App.module.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Card>
          <LoginForm></LoginForm>
        </Card>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;