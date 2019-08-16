import React from 'react';

import AdminUserListItem from './AdminUserListItem/AdminUserListItem';
import styles from './AdminUserList.module.css';

const AdminUserList = ({
  users
}) => (
  <ul className={styles['admin-user-list']}>
    {users.map(user => <AdminUserListItem key={user._id} user={user} />)}
  </ul>
)

export default AdminUserList;