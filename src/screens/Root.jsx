import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';

import Dashboard from './Dashboard/Dashboard';
import Public from '../screens/Public/Public';

const Root = () => (
  <Switch>
    <ProtectedRoute path="/dashboard" component={Dashboard}/>
    <Route path="/" component={Public}/>
  </Switch>
);

export default withRouter(Root);