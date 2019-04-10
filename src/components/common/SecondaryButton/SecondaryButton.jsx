import React from 'react';
import { BasicButton } from '../';
import PropTypes from 'prop-types';

import styles from './SecondaryButton.module.css';

const propTypes = {
  className: PropTypes.string
}

const defaultProps = {
  className: ''
}

const SecondaryButton = props => {

  const { className } = props;

  return (
  <BasicButton {...props} className={[styles['secondary-button'], className].join(' ')}/>
  );
}

SecondaryButton.propTypes = propTypes;
SecondaryButton.defaultProps = defaultProps;

export { SecondaryButton };