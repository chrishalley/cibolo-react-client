import React from 'react';
import PropTypes from 'prop-types';

import styles from './UserBadge.module.css';

const propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
}

const defaultProps = {
  text: 'XX',
  color: '#00BCD4'
}

const UserBadge = ({text, color}) => {

  return (
      <span className={styles['badge-initials']}>{text}</span>
  );
}

UserBadge.propTypes = propTypes;
UserBadge.defaultProps = defaultProps;

export default UserBadge;