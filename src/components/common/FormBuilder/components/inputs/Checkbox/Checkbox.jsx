import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './Checkbox.module.css';

const propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    name: PropTypes.string,
  }).isRequired),
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func
};

const defaultProps = {
  onChange: () => {}
};

const Checkbox = (props) => {
  const {
    defaultValue,
    onChange,
    onBlur,
    options
  } = props;

  const [state, setState] = useState(defaultValue || []);
  
  useEffect(() => {
    onChange(state);
  }, [state]);

  const renderCheckboxes = () => {
    
    return options.map(option => {
      
      const { label, value } = option;
      
      const isChecked = () => {
        return state.indexOf(value) !== -1
      };

      const updateState = (value) => 
        state.indexOf(value) === -1 ? [...state, value] : state.filter(elem => elem !== value);

      return (
        <div data-testid="checkboxGroup" key={label}>
          <label data-testid="checkboxLabel" className={styles.label} htmlFor={label}>{label}</label>
          <input
            id={label}
            data-testid="checkboxInput"
            checked={isChecked()}
            className={styles.input}
            onChange={() => setState([...updateState(value)])}
            type="checkbox"
          />
        </div>
      );
    });
  };

  return (
    <div data-testid="checkbox" onBlur={onBlur}>
      {renderCheckboxes()}
    </div>
  );
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export { Checkbox };