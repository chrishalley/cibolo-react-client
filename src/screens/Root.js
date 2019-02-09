import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Login from './Login/Login'
import Home from './Home/Home'
import EventsScreen from './Events/EventsScreen'

import styles from './Root.module.css'

const Root = () => {
  return (
    <Fragment>
      <Route path="/" exact component={Home}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/events" component={EventsScreen}></Route>
    </Fragment>
  )
}

export default Root;