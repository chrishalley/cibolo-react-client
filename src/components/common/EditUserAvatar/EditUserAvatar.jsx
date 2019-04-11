import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { UserAvatar } from '../';

import { ColorPicker, ImageInput } from '../FormBuilder/components/inputs';
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
  const { avatar: initialAvatar } = user;
  const [avatar, setAvatar] = useState(initialAvatar);

  const onColorChange = (color) => {
    setAvatar({ ...avatar, color: color });
  };

  const onImageChange = (image) => {
    let profileImage = image ? { name: image.name, url: image.src } : null;
    
    setAvatar({ ...avatar, profileImage: profileImage });

  };

  useEffect(() => {
    onChange(avatar);
  }, [avatar]);

  return (
    <div className={styles['edit-user-avatar']}>
      <div className={styles['avatar-preview']}>
        <UserAvatar user={{ ...user, avatar: { color: avatar.color, profileImage: avatar.profileImage } }}/>
        <ColorPicker defaultValue={avatar.color} colors={colors} onChange={onColorChange}></ColorPicker>
      </div>
      <ImageInput initialImage={avatar.profileImage ? {src: avatar.profileImage.url} : null} onChange={onImageChange}/>
    </div>
  );
};

EditUserAvatar.propTypes = propTypes;
EditUserAvatar.defaultProps = defaultProps;

export { EditUserAvatar };