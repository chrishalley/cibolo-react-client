import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions';
import { Spinner } from '../common';

const ProtectedRoute = ({
  component: Component,
  currentUser, 
  tokenExpiry,
  logout,
  ...restProps
}) => {

  const [ auth, setAuth ] = useState(null) // Set initial auth value to null

  useEffect(() => {
    currentUserAuthenticated() // Check whether user is authenticated every time protected route is entered
  }, [])

  const currentUserAuthenticated = () => {
    if ( !currentUser ) { // If there is no currentUser logged in, setAuth to false causing redirect to login
      setAuth(false)
    } else if (tokenExpiry < new Date().getTime()) { // If token is expired, log user out and redirect to login
      logout()
      setAuth(false)
    } else { // Otherwise, user must be authenticated
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
        return <Spinner />
    }
  };

  return (
    <Route {...restProps} render={(props) => renderRoute(props)} />
  );

}

const mapStateToProps = ({ auth: { user, tokenExpiry }}) => ({
  currentUser: user,
  tokenExpiry: tokenExpiry
})

export default connect(mapStateToProps, { logout })(ProtectedRoute);