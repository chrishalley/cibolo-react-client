import React from 'react';
import { Switch } from 'react-router-dom';

import AdminSidebar from '../../components/AdminSidebar/AdminSidebar';
import EventsScreen from './Events/Events';
import UsersScreen from './Users/Users';
import BookingsScreen from './Bookings/BookingsScreen';
import TermsScreen from './Terms/TermsScreen';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';

import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div>
      <AdminSidebar />
      <main className={styles.main}>
        <Switch>
          <ProtectedRoute path="/dashboard/" exact component={EventsScreen} />
          <ProtectedRoute path="/dashboard/events" component={EventsScreen} />
          <ProtectedRoute path="/dashboard/users" component={UsersScreen} />
          <ProtectedRoute path="/dashboard/bookings" component={BookingsScreen} />
          <ProtectedRoute path="/dashboard/terms" component={TermsScreen} />
        </Switch>
      </main>
    </div>
  );
}

export default Dashboard;