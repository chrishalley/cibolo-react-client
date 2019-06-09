import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { BasicButton } from '../../../common/BasicButton/BasicButton';
import styles from '../PublicNav.module.css';

const checkActive = (match, location) => {
  return match && match.isExact;
};

const renderNavItem = props => {
  if (props.externalTo) {
    return <a href={props.externalTo}>{props.label}</a>
  } else if (props.to) {
    return <NavLink to={props.to} exact isActive={checkActive} activeClassName={styles['active']}>{props.label}</NavLink>
  } else {
    return <BasicButton onClick={props.action}>{props.label}</BasicButton>
  }
} 

const PublicNavItem = props => {

  return (
    <li className={styles['public-nav-item']}>
      {renderNavItem(props)}
      <div className={styles['link-underline']}></div>
    </li>
  )
}

export default withRouter(PublicNavItem);