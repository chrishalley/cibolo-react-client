import React, { useEffect } from 'react';

import AdminUserListItem from './AdminUserListItem/AdminUserListItem';
import styles from './AdminUserList.module.css';

const AdminUserList = (props) => {

  const { users } = props;

  // const users = [
  //   {
  //     firstName: 'John',
  //     lastName: 'Smith',
  //     avatar: {
  //       profileImage: 'https://images.pexels.com/photos/1675870/pexels-photo-1675870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //       color: '#21f5ff'
  //     }
  //   },
  //   {
  //     firstName: 'Fred',
  //     lastName: 'Flintstone',
  //     avatar: {
  //       profileImage: null,
  //       color: '#17730c'
  //     }
  //   },
  //   {
  //     firstName: 'John',
  //     lastName: 'Smith',
  //     avatar: {
  //       profileImage: 'https://images.pexels.com/photos/1675870/pexels-photo-1675870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  //     }
  //   },
  // ]

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