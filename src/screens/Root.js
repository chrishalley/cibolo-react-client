import React, { Fragment } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'

import Login from './Login/Login'
import Home from './Home/Home'
import EventsScreen from './Events/EventsScreen'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import AdminScreen from './Admin/AdminScreen'

import styles from './Root.module.css'

const Root = () => {
  return (
    <Fragment>
      <Header></Header>
      <Switch>
        <Route path="/" exact render={routeProps => <Home {...routeProps} />} />
        <Route path="/login" render={routeProps => <Login {...routeProps} />} />
        <Route path="/events" render={routeProps => <EventsScreen {...routeProps} />} />
        <ProtectedRoute path="/protected" component={AdminScreen} />} />
      </Switch>
      <Footer></Footer>
    </Fragment>
  )
}

export default withRouter(Root);