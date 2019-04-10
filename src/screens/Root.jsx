import React, { Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';

import Dashboard from './Dashboard/Dashboard';
import Public from '../screens/Public/Public';

const Root = () => {
  return (
    <Fragment>
      <Switch>
        {/* <Route path="/" exact render={routeProps => <Home {...routeProps} />} />
        <Route path="/login" render={routeProps => <Login {...routeProps} />} />
        <Route path="/events" render={routeProps => <EventsScreen {...routeProps} />} /> */}
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <Route path="/" component={Public} />
      </Switch>
    </Fragment>
  );
}

export default withRouter(Root);