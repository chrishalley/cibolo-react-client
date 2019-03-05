import React from 'react';

import { Card, SVGIcon, BasicButton } from '../../common';

const AdminUserListItem = (props) => {

  const { user } = props;

  return (
    <Card>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.role}</p>
      <BasicButton><SVGIcon style={{ width: "40px" }} icon="pen"></SVGIcon></BasicButton>
    </Card>
  );
}

export default AdminUserListItem;