import React from 'react';

import styles from './UserAvatar.module.css';

const UserAvatar = ({ user }) => {
  return (
    <img className={styles['avatar']} src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
  );
}

export { UserAvatar };