import React, { useEffect } from 'react';

import AdminUserListItem from './AdminUserListItem/AdminUserListItem';
import styles from './AdminUserList.module.css';

const AdminUserList = (props) => {

  const { users } = props;

  useEffect(() => {
    console.log('props: ', props)
  });

  const renderUsers = () => {
    return users.map(user => {
      return (
        <li key={user._id}>
          <AdminUserListItem user={user} />
        </li>
      );
    });
  }

  return (
    <ul className={styles['admin-user-list']}>
      {renderUsers()}
    </ul>
  )
}

export default AdminUserList;