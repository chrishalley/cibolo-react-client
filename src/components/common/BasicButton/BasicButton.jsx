import React  from 'react';
import PropTypes from 'prop-types';

import styles from './BasicButton.module.css';

const proptypes = {
  classNames: PropTypes.array, // custom css class names passed in at component instance
  className: PropTypes.string, // class name passed in by styled-components
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]),
  onClick: PropTypes.func
}

const defaultProps = {
  classNames: [],
  onClick: () => console.warn('onClick() prop has not been defined')
}

const BasicButton = (props) => {

  const { classNames, className, children, onClick, ...restProps } = props;

  return (
    <button type="button" onClick={(e) => onClick && onClick(e)} className={`${styles['button']} ${className} ${[...classNames]}`} {...restProps}>{children}</button>
  );
}

BasicButton.propTypes = proptypes;
BasicButton.defaultProps = defaultProps;

export { BasicButton };