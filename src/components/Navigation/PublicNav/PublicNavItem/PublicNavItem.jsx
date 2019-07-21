import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { BasicButton } from '../../../common/BasicButton/BasicButton';
import styles from '../PublicNav.module.css';

const checkActive = (match, location) => {
  return match && match.isExact;
};

const renderNavItem = ({
  externalTo,
  to,
  action,
  label
}) => {
  if (action) return <BasicButton onClick={action}>{label}</BasicButton>
  else if (externalTo) return <a href={externalTo}>{label}</a>
  else if (to) return <NavLink to={to} exact isActive={checkActive} activeClassName={styles['active']}>{label}</NavLink>
  else throw new Error('error in PublicNavItem')
} 

const PublicNavItem = props => (
  <li className={styles['public-nav-item']}>
    {renderNavItem(props)}
    <div className={styles['link-underline']}></div>
  </li>
)

export default withRouter(PublicNavItem);