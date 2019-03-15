import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ColorPickerInput from './ColorPickerInput/ColorPickerInput';

import styles from './ColorPicker.module.css';

const propTypes = {
  colors: PropTypes.array.isRequired
}

const defaultProps = {
  colors: [
    '#FF0000',
    '#00FF00',
    '#0000FF',
  ]
}

const ColorPicker = ({ colors, onChange }) => {

  const [value, setValue] = useState(colors[0]);

 useEffect(() => {
  
 }, [value])

  const renderInputs = colors.map(color => {
    return (
      <ColorPickerInput key={color} color={color} selected={color === value} onChange={() => setValue(color)}/>
    );
  })

  return (
    <div className={styles.picker}>
      {renderInputs}
    </div>
  );
}

ColorPicker.propTypes = propTypes;
ColorPicker.defaultProps = defaultProps;

export { ColorPicker };