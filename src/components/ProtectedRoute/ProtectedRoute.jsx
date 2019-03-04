import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions';
import { Spinner } from '../common';

const ProtectedRoute = (props) => {
  const { component: Component, currentUser, ...rest } = props;
  const [ auth, setAuth ] = useState(null) // Set initial auth value to null

  useEffect(() => {
    currentUserAuthenticated() // Check whether user is authenticated every time protected route is entered
  })

  const currentUserAuthenticated = () => {
    if ( !currentUser ) { // If there is no currentUser logged in, setAuth to false causing redirect to login
      console.log('no currentUser')
      setAuth(false)
      // props.logout()
    } else if (currentUser && currentUser.tokenExpiry && currentUser.tokenExpiry < new Date().getTime()) { // If token is expired, log user out and redirect to login
      console.log('token expired')
      props.logout()
      setAuth(false)
    } else { // Otherwise, user must be authenticated
      setAuth(true)
    }
  }

  const renderRoute = (props) => {
    console.log('auth: ', auth)
    switch (auth) {
      case true:
        return <Component {...props} />
      case false:
        return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      default:
        return <Spinner></Spinner>
    }
  };

  return (
    <Route {...rest} render={(props) => renderRoute(props)} />
  );

}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { logout })(ProtectedRoute);