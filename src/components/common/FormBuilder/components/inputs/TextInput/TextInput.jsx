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
  value: PropTypes.string,
  onKeyPress: PropTypes.func
};

const defaultProps = {
  defaultValue: '',
  type: 'text',
  onChange: () => console.warn('no onChange prop provided'),
  onBlur: () => console.warn('no onBlur prop provided'),
  disabled: false,
  onKeyPress: (e) => e.Key === 'Enter' && e.preventDefault()
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
    value,
    onKeyPress
  } = props;

  const [state, setState] = useState(value || defaultValue);

  useEffect(() => {
    console.log('textInput value changed')
  }, [value]);

  useEffect(() => {
    onChange(state);
  }, [state]);

  // Input component can be responsible for maintaining value in it's own state or receiving it from parent component,
  // depending on null/non-null value prop
  // onChangeHandler and onValueHandlers differ according to state responsibility
  const onChangeHandler = (val) => {
    setState(val);
  };

  // const valueHandler = useCallback(() => {
  //   console.log('value:', value)
  //   return !value ? state : value;
  // }, []);

  return (
    !disabled ? (
      <input
        id={name}
        data-testid="textInput"
        value={state}
        type={type}
        placeholder={placeholder}
        onChange={e => onChangeHandler(e.target.value)}
        onBlur={onBlur}
        className={styles.input}
        onKeyPress={e => onKeyPress(e)}
      />
    ) : (
      <p data-testid="disabledField">{state}</p>
    )
  );
};

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export { TextInput };