import React, { useContext, useEffect } from 'react';

import { Card, SVGIcon, BasicButton } from '../../common';
import { UsersContext } from '../../../screens/Dashboard/Users/Users';

const AdminUserListItem = React.memo((props) => {

  const { openEditForm } = useContext(UsersContext);
  const { user } = props;

  // useEffect(() => {
  //   console.log('check: ', openEditForm);
  // });

  return (
    <Card>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.role}</p>
      <BasicButton onClick={() => openEditForm(user)}><SVGIcon style={{ width: "40px" }} icon="pen"></SVGIcon></BasicButton>
    </Card>
  );
});

export default AdminUserListItem;