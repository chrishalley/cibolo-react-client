import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions';

import { SVGIcon, PrimaryButton } from '../common';
import styles from './AdminSidebar.module.css';

const AdminSidebar = (props) => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const links = [
    { to: '/dashboard/users', label: 'Users', icon: 'person' },
    { to: '/dashboard/events', label: 'Events', icon: 'calendar' },
    { to: '/dashboard/bookings', label: 'Bookings', icon: 'deskbell' },
    { to: '/dashboard/terms', label: 'Terms & Conditions', icon: 'document-approved' },
    { to: '/', label: 'View Website', icon: 'eye' }
  ];

  const renderLinks = () => {
    return links.map(({to, label, icon}, i) => {
      return (
        <li key={label} className={styles['menu-list-item']}>
          <Link className={styles['menu-link']} to={to}>{label}<SVGIcon className={styles['menu-link-icon']} icon={icon} /></Link>
        </li>
      )
    });
  }

  return (
    <div className={`${styles['admin-sidebar']} ${menuOpen ? styles['isOpen'] : ''}`}>
      <ul className={styles['menu-list']}>
        <li className={styles['menu-list-item']}>
          <PrimaryButton onClick={toggleMenu} className={[styles['menu-button'], menuOpen ? styles['menu-button-open'] : ''].join(' ')}><SVGIcon icon="arrow-right" /></PrimaryButton>
        </li>
        {renderLinks()}
        <li className={styles['menu-list-item']}>
          <Link className={styles['menu-link']} to="/dashboard" onClick={() => logout().then(() => props.history.push('/login'))}>Logout <SVGIcon className={styles['menu-link-icon']} icon="logout" /></Link>
        </li>
      </ul>
    </div>
  );
}

export default withRouter(connect(null, { logout })(AdminSidebar));