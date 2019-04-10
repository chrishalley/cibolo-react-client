import React from 'react';
import PropTypes from 'prop-types';

import styles from './UserImage.module.css';

const propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

const UserImage = ({ src, alt }) => {
  return (
    <img className={styles['avatar-image']} data-testid="avatarImage" src={src} alt={alt} />
  );
}

UserImage.propTypes = propTypes;

export default UserImage;