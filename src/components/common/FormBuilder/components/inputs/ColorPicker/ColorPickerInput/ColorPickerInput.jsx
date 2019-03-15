import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './ColorPickerInput.module.css';

const propTypes = {
  color: PropTypes.string,
  selected: PropTypes.bool,
  onChange: PropTypes.func
}

const ColorPickerInput = ({ color, selected, onChange }) => {

  let classNames = [styles.input];
  selected && classNames.push('selected');

  return (
      <div className={styles.container}>
        <label htmlFor={color} className={styles.swatch} style={{ backgroundColor: color }} onClick={() => onChange(color)}></label>
        {/* <p>Classnames: {classNames.join(' ')}</p>
        <p>Id: {`color_${color.slice(1)}`}</p> */}
        <input 
          id={`color_${color.slice(1)}`}
          type="radio"
          className={classNames.join(' ')}
          checked={selected}
          value={color}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
  )
}

ColorPickerInput.propTypes = propTypes;

export default ColorPickerInput;