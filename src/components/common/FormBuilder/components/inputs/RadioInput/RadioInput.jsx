import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const proptypes = {
  defaultValue: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.node
  }).isRequired),
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool
}

const defaultProps = {
  onChange: () => console.warn("no onChange prop provided")
};

const RadioInput = (props) => {
  const { 
    defaultValue,
    name,
    onChange,
    onBlur,
    disabled,
    options
  } = props;

  const [state, setState] = useState(defaultValue || options[0].value);

  useEffect(() => {
    onChange(state)
  }, [state])

  const renderInputs = () => {

    return options.map(option => (
      <div key={option.label}>
        <label data-testid="radioButtonLabel" htmlFor={option.value}>{option.label}</label>
        <input
          data-testid="radioButton"
          checked={state === option.value}
          type="radio"
          name={name}
          value={option.value} onChange={() => { setState(option.value) }}
        ></input>
      </div>
      )
    );
  }

  return (
    <div data-testid="radioInput" onBlur={onBlur}>
      {!disabled ? 
      renderInputs(props) :
      <p>Value: {state}</p>}
      
    </div>
  );
}

RadioInput.propTypes = proptypes;
RadioInput.defaultProps = defaultProps;

export { RadioInput };