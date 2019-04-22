import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import styles from '../PublicNav.module.css';

const checkActive = (match, location) => {
  // console.log({match, location});
  //some additional logic to verify you are in the home URI
  // if (!location) return false;
  // const { pathname } = location;
  // console.log(pathname);
  // return pathname === "/";
  return match && match.isExact;
};

const PublicNavItem = props => {
  const { externalTo, to, label } = props;

  return (
    <li className={styles['public-nav-item']}>
      {externalTo ? 
        <a href={externalTo}>{label}</a> : 
        <NavLink to={to} exact isActive={checkActive} activeClassName={styles['active']}>{label}</NavLink>}
      <div className={styles['link-underline']}></div>
    </li>
  )
}

export default withRouter(PublicNavItem);