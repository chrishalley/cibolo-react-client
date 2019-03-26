import React from 'react';

import styles from './FieldGroup.module.css';

const FieldGroup = (props) => {
  const { children, flexDirection = 'column' } = props;

  const flexStyle = flexDirection === 'column' ? styles.column : styles.row;

  return (
    <div data-testid="fieldGroup" className={flexStyle}>
      {children}
    </div>
  )
};

export { FieldGroup };