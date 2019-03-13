import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import UserImage from './UserImage/UserImage';
import UserBadge from './UserBadge/UserBadge';

import styles from './UserAvatar.module.css';

const defaultProps = {
  user: {
    firstName: 'Jimmy',
    lastName: 'Jimmison',
    avatar: {
      profileImage: 'something',
      color: '#ff0000'
    }
  },
  defaultColor: '#00BCD4'
}

const UserAvatar = (props) => {

  const { user, defaultColor } = props;

  useEffect(() => {
    console.log('UUUSER: ', user)
  })

  const renderUserImage = (user) => {
    return <UserImage src={user.avatar.profileImage} alt={`${user.firstName} ${user.lastName}`} />
  }

  const renderUserBadge = (user) => {
    const renderInitials = () => {
      return (`${user.firstName.slice(0,1)}${user.lastName.slice(0,1)}`).toUpperCase();
    }

    return user && <UserBadge text={renderInitials()} color={user.avatar && user.avatar.color} />
  }

  return (
    <div className={styles.avatar} style={{ backgroundColor: (user.avatar && user.avatar.color)|| defaultColor, borderColor: (user.avatar && user.avatar.color) || defaultColor }}>
      {(user.avatar && user.avatar.profileImage) ? renderUserImage(user) : renderUserBadge(user)}
    </div>
  );
}

UserAvatar.defaultProps = defaultProps;

export { UserAvatar };