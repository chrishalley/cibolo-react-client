import React from 'react';
import PropTypes from 'prop-types';

import UserImage from './UserImage/UserImage';
import UserBadge from './UserBadge/UserBadge';

import styles from './UserAvatar.module.css';

const propTypes = {
  chip: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

const defaultProps = {
  user: {
    firstName: '',
    lastName: '',
    avatar: {
      profileImage: null,
    }
  },
  defaultColor: '#00BCD4'
}

const UserAvatar = (props) => {

  const { user, defaultColor, chip } = props;

  const renderUserImage = (user) => {
    return <UserImage src={user.avatar.profileImage} alt={`${user.firstName} ${user.lastName}`} />
  }

  const renderUserBadge = (user) => {
    const renderInitials = () => {
      const firstInitial = (user && user.firstName) ? user.firstName.slice(0,1) : '';
      const lastInitial = (user && user.lastName) ? user.lastName.slice(0,1) : '';
      return (`${firstInitial}${lastInitial}`).toUpperCase();
    }

    return user && <UserBadge text={renderInitials()} color={user.avatar && user.avatar.color} />
  }

  return (
    <div className={styles['avatar-wrapper']} data-test="avatar-wrapper">
      <div className={styles['chip-slot']}>{chip}</div>
      <div
        className={styles.avatar}
        style={{ color: (user.avatar && user.avatar.color) || defaultColor, borderColor: (user.avatar && user.avatar.color) || defaultColor }}
        data-test="avatar"
      >
        {(user.avatar && user.avatar.profileImage) ? renderUserImage(user) : renderUserBadge(user)}
      </div>
    </div>
    
  );
}

UserAvatar.propTypes = propTypes;
UserAvatar.defaultProps = defaultProps;

export { UserAvatar };