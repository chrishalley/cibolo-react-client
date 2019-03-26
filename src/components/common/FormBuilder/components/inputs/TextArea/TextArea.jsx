import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './TextArea.module.css';

const proptypes = {
  defaultValue: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  rows: PropTypes.string,
  placeholder: PropTypes.string,
};

const defaultProps = {
  defaultValue: '',
  onChange: () => console.warn('no onChange prop provided'),
  onBlur: () => console.warn('no onChange prop provided'),
  disabled: false,
  rows: '10',
};

const TextArea = (props) => {
  const { defaultValue, name, onChange, onBlur, disabled, placeholder, rows } = props;
  const [state, setState] = useState(defaultValue);

  useEffect(() => {
    onChange(state);
  }, [state])

  // useEffect(() => {
  //   console.log('textarea props:', props);
  // })

  return (
    <div>
      {!disabled ? 
      <textarea
        value={state}
        id={name}
        data-testid="textArea"
        className={styles.input}
        placeholder={placeholder}
        rows={rows}
        onChange={(e) => setState(e.target.value)}
        onBlur={onBlur}
      /> : 
      <p data-testid="readOnly">{state}</p>}
    </div>
  );
};

TextArea.propTypes = proptypes;
TextArea.defaultProps = defaultProps;

export { TextArea };