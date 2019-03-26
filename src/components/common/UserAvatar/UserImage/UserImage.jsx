import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

const UserImage = ({ src, alt }) => {
  return (
    <img data-testid="avatar-image" src={src} alt={alt} style={{ width: '100%'}}/>
  );
}

UserImage.propTypes = propTypes;

export default UserImage;