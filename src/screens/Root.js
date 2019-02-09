import React from 'react'
import { Route } from 'react-router-dom'

import Login from './Login/Login'
import Home from './Home/Home'

const Root = () => {
  return (
      <div>
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" component={Login}></Route>
      </div>
  )
}

export default Root;