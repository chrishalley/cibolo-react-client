import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../actions';

import PublicNav from '../Navigation/PublicNav/PublicNav';
import styles from './Header.module.css';

const PublicHeader = props => {

  const publicRoutes = [
    {
      externalTo: "http://www.dsj.org.uk",
      label: "Home"
    },
    {
      to: "/",
      label: "Events"
    },
    {
      externalTo: "http://www.dsj.org.uk/general/contacts.pdf",
      label: "Contacts"
    },
    {
      externalTo: "http://www.dsj.org.uk/children/index.html",
      label: "Children"
    },
    {
      externalTo: "http://www.dsj.org.uk/magazine/index.html",
      label: "Magazine"
    },
    {
      externalTo: "http://www.dsj.org.uk/history/index.html",
      label: "History"
    },
    {
      externalTo: "http://www.dsj.org.uk/groups/index.html",
      label: "Groups"
    },
    {
      externalTo: "http://www.dsj.org.uk/who/index.html",
      label: "Who's Who?"
    },
    {
      externalTo: "http://www.dsj.org.uk/find/index.html",
      label: "Find Us"
    },
    {
      externalTo: "http://www.dsj.org.uk/links/index.html",
      label: "Links"
    },
    {
      externalTo: "http://www.dsj.org.uk/groups/choir/index.html",
      label: "Choir"
    },
    {
      externalTo: "http://www.dsj.org.uk/rose/index.html",
      label: "Rose & Sweet Pea"
    }
  ];

  const adminRoutesLoggedIn = [
    {
      to: "/dashboard",
      label: "Dashboard"
    },
    {
      action: () => actions.logout(),
      label: "Log out"
    }
  ];

  const adminRoutesLoggedOut = [
    {
      action: () => props.history.push("/login"),
      label: "Log in"
    }
  ];

  const adminRoutes = props.currentUser ? adminRoutesLoggedIn : adminRoutesLoggedOut;

  return (
    <header className={styles['header']}>
      <PublicNav routes={publicRoutes}/>
      <PublicNav routes={adminRoutes}/>
    </header>
  );
}

const mapStateToProps = state => ({ currentUser: state.auth.user });

export default withRouter(connect(mapStateToProps, actions)(PublicHeader));