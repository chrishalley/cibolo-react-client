import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const proptypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired
}

const Select = (props) => {

  const { disabled, name, value, options, onChange } = props;

  useEffect(() => {
    console.log('Select props: ', props);
  })

  const onChangeHandler = (e) => {
    onChange({ path: name, value: e.target.value })
  }

  const renderOptions = () => {
    return options.map(option => {
      return (
        <option key={option.value} value={option.value}>{option.name}</option>
      )
    });
  }

  return (
    !disabled ? <select value={value} onChange={(e) => onChangeHandler(e)}>{renderOptions()}</select> :
    <p>{value}</p>
  );
}

Select.propTypes = proptypes;

export { Select };