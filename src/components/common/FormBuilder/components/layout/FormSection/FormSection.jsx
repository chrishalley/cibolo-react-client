import React from 'react';

import styles from './FormSection.module.css';

const FormSection = (props) => {
  const { flexDirection = 'column', children, title } = props;

  const flexStyle = flexDirection === 'column' ? styles.column : styles.row;

  return (
    <div data-testid="formSection">
      <h4>{title}</h4>
      <div className={flexStyle}>
        {children}
      </div>
    </div>
  );
};

export { FormSection };