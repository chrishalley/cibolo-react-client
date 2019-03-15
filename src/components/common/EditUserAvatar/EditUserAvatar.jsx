import React, { useState } from 'react';

import { UserAvatar, AddFile } from '../';
import { ColorPicker } from '../FormBuilder/components/inputs';
import styles from './EditUserAvatar.module.css';

const colors = [
  '#00BCD4',
  '#F79256',
  '#FBD1A2',
  '#7DCFB6',
  '#1D4E89',
  '#FC5130',
  '#06908F',
  '#7AE582'
];

const EditUserAvatar = (props) => {
  console.log('EditUserAvatar props: ', props);

  const [profileImage, setProfileImage] = useState(null);

  const [color, setColor] = useState(colors[0]);

  return (
    <div className={styles['edit-user-avatar']}>
      <div className={styles['avatar-preview']}>
        <UserAvatar />
        <ColorPicker colors={colors}></ColorPicker>
      </div>
      <AddFile></AddFile>
    </div>
  );
};

export { EditUserAvatar };