import React, { useEffect } from 'react';

import AdminUserListItem from './AdminUserListItem/AdminUserListItem';

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
    <ul>
      {renderUsers()}
    </ul>
  )
}

export default AdminUserList;