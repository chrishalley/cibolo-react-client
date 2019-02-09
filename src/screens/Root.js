import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Login from './Login/Login'
import Home from './Home/Home'

const Root = () => {
  return (
    <Fragment>
      <Route path="/" exact component={Home}></Route>
      <Route path="/login" component={Login}></Route>
    </Fragment>
  )
}

export default Root;