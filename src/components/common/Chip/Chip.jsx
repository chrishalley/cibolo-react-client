import React from 'react';
import PropTypes from 'prop-types';

import styles from './Chip.module.css';

const propTypes = {
  onClick: PropTypes.func
}

const defaultProps = {
  onClick: () => {}
}

const Chip = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className={styles.chip} data-testid="chip">
      <span className={styles.content}>{children}</span>
    </button>
  )
};

Chip.propTypes = propTypes;
Chip.defaultProps = defaultProps;

export { Chip };
