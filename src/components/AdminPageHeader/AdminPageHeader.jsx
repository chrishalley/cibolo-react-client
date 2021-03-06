import React from 'react';

import styles from './AdminPageHeader.module.css';

const AdminPageHeader = (props) => {
  const { children, title } = props;
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </header>
  );
}

export default AdminPageHeader;