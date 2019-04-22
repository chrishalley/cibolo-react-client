import React from 'react';
import PropTypes from 'prop-types';
import PublicNavItem from './PublicNavItem/PublicNavItem';

import styles from './PublicNav.module.css';

const propTypes = {
  routes: PropTypes.array
}

const defaultProps = {

}

const PublicNav = props => {

  const { routes } = props;

  const renderRoutes = routes.map(route => {
    return <PublicNavItem key={route.label} {...route}/>
  })

  return (
    <nav>
      <ul className={styles['public-nav']}>
        {renderRoutes}
      </ul>
    </nav>
  );
}

PublicNav.propTypes = propTypes;
PublicNav.defaultProps = defaultProps;

export default PublicNav;