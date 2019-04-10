import React, { useContext } from 'react';

import { Card, SVGIcon, BasicButton, UserAvatar } from '../../common';
import { UsersContext } from '../../../screens/Dashboard/Users/Users';
import styles from './AdminUserListItem.module.css';

const AdminUserListItem = (props) => {

  const { openEditForm } = useContext(UsersContext);
  const { user } = props;

  return (
    <Card className={styles['user-list-item']}>
      <UserAvatar user={user} />
      <div className={styles['quick-info']}>
        <h3 className={styles['user-name']}>{user.firstName} {user.lastName}</h3>
        <p className={styles['user-role']}>{user.role}</p>
      </div>
      <div className={styles['action-buttons']}>
        <BasicButton onClick={() => openEditForm(user)}><SVGIcon style={{ width: "40px" }} icon="eye"></SVGIcon></BasicButton>
      </div>
    </Card>
  );
};

export default AdminUserListItem;