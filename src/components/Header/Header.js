import React from 'react';

import HeaderLink from '../common/HeaderLink/HeaderLink'

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles['appHeader']}>
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/login">Login</HeaderLink>
    </header>
  )
}

export default Header;