import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './TextInput.module.css';

const propTypes = {
  defaultValue: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

const defaultProps = {
  defaultValue: '',
  type: 'text',
  onChange: () => console.warn('no onChange prop provided'),
  onBlur: () => console.warn('no onBlur prop provided'),
  disabled: false,
  value: null
};

const TextInput = (props) => {
  const {
    defaultValue,
    name,
    type,
    onChange,
    onBlur,
    disabled,
    placeholder,
    value
  } = props;
  const [state, setState] = useState(defaultValue);

  useEffect(() => {

    // console.log(`${name} input mounted`);
  }, []);
 
  useEffect(() => {
    // console.log(`${name} input rerendered`);
  });

  useEffect(() => {
    // console.log(`${name} input state has changed`);
    onChange(state);
  }, [state]);

  // Input component can be responsible for maintaining value in it's own state or receiving it from parent component,
  // depending on null/non-null value prop
  // onChangeHandler and onValueHandlers differ according to state responsibility
  const onChangeHandler = (val) => value !== null ? onChange(val) : setState(val);

  const valueHandler = () => value !== null ? value : state;

  return (
    <div>
      {!disabled ? (
        <input
          id={name}
          data-testid="textInput"
          value={valueHandler()}
          type={type}
          placeholder={placeholder}
          onChange={e => onChangeHandler(e.target.value)}
          onBlur={onBlur}
          className={styles.input}
        />
      ) : (
        <p data-testid="disabledField">{valueHandler()}</p>
      )}
      {/* <p data-testid="output">{name} state: {state}</p> */}
    </div>
  );
};

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export { TextInput };