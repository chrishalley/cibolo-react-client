import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './ColorPickerInput.module.css';

const propTypes = {
  color: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}

const ColorPickerInput = ({ color, selected, onChange }) => {
  
  const selectedStyles = selected ? { border: '2px solid rgba(255, 255, 255, 0.3)' } : null;
  
  return (
    <div className={styles.container} data-testid="color-picker-input">
        <label
          htmlFor={color}
          className={styles.swatch}
          style={{ backgroundColor: color, ...selectedStyles }}
          onClick={() => onChange(color)}
          data-testid="color-picker-input-label"
        ></label>
        <input 
          data-testid="color-picker-input-radio"
          id={`color_${color.slice(1)}`}
          type="radio"
          // className={classNames.join(' ')}
          checked={selected}
          value={color}
          onChange={(e) => onChange(e.target.value)}
          className={styles.input}
        />
      </div>
  )
}

ColorPickerInput.propTypes = propTypes;

export default ColorPickerInput;