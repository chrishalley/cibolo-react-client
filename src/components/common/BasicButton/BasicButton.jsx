import React from 'react';
import PropTypes from 'prop-types';

import styles from './BasicButton.module.css';

const proptypes = {
  className: PropTypes.string, // custom css styles passed in at component instance
  // className: PropTypes.string, // class name passed in by styled-components
  onClick: PropTypes.func
}

const defaultProps = {
  className: '',
  onClick: () => console.warn('onClick() prop has not been defined')
}

const BasicButton = (props) => {

  const { className, children, onClick, ...restProps } = props;

  return (
    <button
      type="button"
      onClick={(e) => onClick && onClick(e)}
      className={[styles['button'], className].join(' ')}
      {...restProps}>
        {children}
    </button>
  );
}

BasicButton.propTypes = proptypes;
BasicButton.defaultProps = defaultProps;

export { BasicButton };