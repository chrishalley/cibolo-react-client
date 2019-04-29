import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions';
import { Spinner } from '../common';

const ProtectedRoute = (props) => {
  const { component: Component, currentUser, tokenExpiry, ...rest } = props;
  const [ auth, setAuth ] = useState(null) // Set initial auth value to null

  useEffect(() => {
    currentUserAuthenticated() // Check whether user is authenticated every time protected route is entered
  })

  const currentUserAuthenticated = () => {
    console.log(new Date(tokenExpiry), new Date());
    if ( !currentUser ) { // If there is no currentUser logged in, setAuth to false causing redirect to login
      console.log('no current user')
      setAuth(false)
      // props.logout()
    } else if (tokenExpiry < new Date().getTime()) { // If token is expired, log user out and redirect to login
      console.log('token is expired')
      props.logout()
      setAuth(false)
    } else { // Otherwise, user must be authenticated
      console.log('authenticated')
      setAuth(true)
    }
  }

  const renderRoute = (props) => {
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
    currentUser: state.auth.user,
    tokenExpiry: state.auth.tokenExpiry
  }
}

export default connect(mapStateToProps, { logout })(ProtectedRoute);