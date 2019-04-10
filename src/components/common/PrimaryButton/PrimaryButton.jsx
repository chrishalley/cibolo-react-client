import React from 'react';
import PropTypes from 'prop-types';

import { BasicButton } from '../';

import styles from './PrimaryButton.module.css';

const propTypes = {
  className: PropTypes.string
};

const defaultProps = {
  className: ''
};

const PrimaryButton = props => {
  const { children, className, ...restProps } = props;

  return (
    <BasicButton className={[styles['primary-button'], className].join(' ')} {...restProps}>{children}</BasicButton>
  );
}

PrimaryButton.propTypes = propTypes;
PrimaryButton.defaultProps = defaultProps;

export { PrimaryButton };