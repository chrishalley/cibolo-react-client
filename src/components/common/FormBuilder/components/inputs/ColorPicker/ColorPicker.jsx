import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ColorPickerInput from './ColorPickerInput/ColorPickerInput';

import styles from './ColorPicker.module.css';

const propTypes = {
  colors: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
}

const defaultProps = {
  colors: [
    '#FF0000',
    '#00FF00',
    '#0000FF',
  ],
  onChange: () => console.warn('onChange method not specified')
}

const ColorPicker = (props) => {

  const { colors, onChange, defaultValue } = props;

  const [value, setValue] = useState(defaultValue || colors[0]);

  // useEffect(() => {
  //   console.log('colorPicker props:', props)
  // }, [])

  useEffect(() => {
    onChange(value);
  }, [value])

  const renderInputs = colors.map(color => {
    return (
      <ColorPickerInput
        key={color} 
        color={color}
        selected={color === value}
        onChange={() => setValue(color)}
      />
    );
  });

  return (
    <div className={styles.picker}>
      {renderInputs}
    </div>
  );
}

ColorPicker.propTypes = propTypes;
ColorPicker.defaultProps = defaultProps;

export { ColorPicker };