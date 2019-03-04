import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import AdminSidebar from '../../components/AdminSidebar/AdminSidebar';
import EventsScreen from './Events/Events';
import UsersScreen from './Users/Users';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';

const Dashboard = () => {
  return (
    <div>
      {/* <AdminSidebar>
        <Link to="/dashboard/events">Events</Link>
        <Link to="/dashboard/users">Users</Link>
        <Link to="/random">Random</Link>
      </AdminSidebar> */}
      <AdminSidebar />
      <main style={{ marginLeft: '60px' }}>
        <Switch>
          <ProtectedRoute path="/dashboard/" exact component={EventsScreen} />
          <ProtectedRoute path="/dashboard/events" component={EventsScreen} />
          <ProtectedRoute path="/dashboard/users" component={UsersScreen} />
        </Switch>
      </main>
    </div>
  );
}

export default Dashboard;