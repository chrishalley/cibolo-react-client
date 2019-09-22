import React from 'react';
import PropTypes from 'prop-types';
import PublicNavItem from './PublicNavItem/PublicNavItem';

import styles from './PublicNav.module.css';

const propTypes = {
  routes: PropTypes.array
}

const PublicNav = ({
  routes
}) => (
  <nav>
    <ul className={styles['public-nav']}>
      {routes.map(route => <PublicNavItem key={route.label} {...route} />)}
    </ul>
  </nav>
);

PublicNav.propTypes = propTypes;

export default PublicNav;