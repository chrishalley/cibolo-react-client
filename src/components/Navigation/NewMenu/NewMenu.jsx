import React, {useState} from 'react';

import styles from './NewMenu.module.css';

const NewMenu = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <>
      <div
        className={styles.newMenu}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <p className={styles.newMenuButton}>New Menu</p>
      </div>
      {menuOpen && 
        <div className={styles.menuBody}>
          <p>Menu open!</p>
        </div>
      }
    </>
  );
};

export default NewMenu;