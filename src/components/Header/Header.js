import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles['appHeader']}>Header component</header>
  )
}

export default Header;