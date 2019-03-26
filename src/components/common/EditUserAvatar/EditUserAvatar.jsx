import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { UserAvatar, AddImage } from '../';
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

const propTypes = {
  user: PropTypes.object
};

const defaultProps = {
  user: {
    firstName: '',
    lastName: '',
    avatar: {
      profileImage: null,
      color: colors[0]
    }
  }
};

const EditUserAvatar = (props) => {
  const { user, onChange } = props;
  console.log('EditUserAvatar props: ', props);
  const { avatar: initialAvatar } = user;
  // console.log('initialAvatar', initialAvatar)
  const [avatar, setAvatar] = useState(initialAvatar);

  const onColorChange = (color) => {
    setAvatar({ ...avatar, color: color });
  };

  const onImageChange = (profileImage) => {
    setAvatar({ ...avatar, profileImage: profileImage });
  };

  useEffect(() => {
    console.log('avatar:', avatar)
    onChange(avatar);
  }, [avatar]);



  return (
    <div className={styles['edit-user-avatar']}>
      <div className={styles['avatar-preview']}>
        <UserAvatar user={{ ...user, avatar: { color: avatar.color, profileImage: avatar.profileImage} }}/>
        <ColorPicker defaultValue={avatar.color} colors={colors} onChange={onColorChange}></ColorPicker>
      </div>
      {/* <AddImage /> */}
    </div>
  );
};

EditUserAvatar.propTypes = propTypes;
EditUserAvatar.defaultProps = defaultProps;

export { EditUserAvatar };