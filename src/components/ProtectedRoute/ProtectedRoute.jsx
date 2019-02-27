import React, { useState, useEffect, Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { initAuth } from '../../actions';
import { connect } from 'react-redux';

import { Spinner } from '../common';

const ProtectedRoute = (props) => {
  const { component: Component, authenticated, initAuth, currentUser, ...rest } = props;

  const [loading, setLoading] = useState(false)

  const checkAuth = () => {
    setLoading(true);

    if (currentUser && currentUser.tokenExpiry > new Date().getTime()) {
      setLoading(false)
      return true
    } else {
      initAuth()
        .then(res => {
          console.log('res: ', res)
          console.log(currentUser)
          return true
        })
        .catch(e => {
          console.log('e: ', e)
          return false
        })
    }

    // return new Promise((resolve, reject) => {
    //   console.log('checkAuth running')
    //   setLoading(true)
      // if (!currentUser || !currentUser.tokenExpiry > new Date().getTime()) {
      //   initAuth()
      //     .then(res => {
      //       console.log(currentUser)
      //       resolve(currentUser !== null && currentUser.tokenExpiry > new Date().getTime())
      //     })
      //     .catch(e => {
      //       setLoading(false)
      //       console.log('here')
      //       console.log(e)
      //       resolve(false)
      //     })
      // }
      // setLoading(false)
      // resolve(true)
    // });
    // // debugger;

  }

  const renderSpinner = () => {
    if (loading) {
      return <Spinner></Spinner>
    }  
  }

  const renderComponent = (props) => {
    return checkAuth() ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  }

  return (
    <Route {...rest} render={(props) => {
      return (
        <Fragment>
          {renderSpinner()}
          {renderComponent(props)} 
        </Fragment>
      )}
    } />
  );

}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { initAuth })(ProtectedRoute);