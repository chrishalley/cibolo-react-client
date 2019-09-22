
import React, { useState } from 'react';

import MobilePublicNavItem from './MobilePublicNavItem/MobilePublicNavItem'

import styles from './MobilePublicNav.module.css'

const MobilePublicNav = ({
  routes
}) => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <div
      className={styles.button}
    >

    </div>
      {/* <button
        onClick={() => setMenuOpen(!menuOpen)}
      >Menu</button>
      {menuOpen &&
        <nav>
          <ul>
            {routes.map(route => <MobilePublicNavItem key={route.label} {...route} />)}
          </ul>
        </nav>
      } */}
    </>
  )
};

export default MobilePublicNav;