import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './Select.module.css';

const propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired,
  disabled: PropTypes.bool,
  name:  PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

const defaultProps = {
  onChange: () => console.warn("no onChange prop provided"),
  disabled: false
};

const Select = (props) => {
  const {
    defaultValue,
    name,
    onChange,
    onBlur,
    disabled,
    options,
  } = props;
  
  const [state, setState] = useState(defaultValue || options[0].value);

  useEffect(() => {
    onChange(state);
  }, [state]);

  const renderOptions = () => options.map(option => <option data-testid="selectOption" key={option.value} value={option.value}>{option.label}</option>);

  return (
    !disabled ? 
    <select 
      id={name}
      data-testid="select"
      value={state}
      onChange={(e) => setState(e.target.value)}
      onBlur={onBlur}
      className={styles.select}
    >{renderOptions()}</select> :
    <p data-testid="readOnly">{state}</p>
  );
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export { Select };