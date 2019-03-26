import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';

import { Checkbox } from './Checkbox';

afterEach(cleanup);

describe('Checkbox basic tests', () => {
  const options = [
    { label: 'Option 1', name: 'option1', value: false },
    { label: 'Option 2', name: 'option2', value: false },
    { label: 'Option 3', name: 'option3', value: false }
  ];

  const defaultProps = {
    onChange: () => {},
    onBlur: () => {},
    options: options,
    name: 'test'
  }

  const setup = props => {
    return render(<Checkbox {...defaultProps} {...props} />)
  }

  it('should render', () => {
    const { getAllByTestId } = setup();
    const checkbox = getAllByTestId('checkbox');
    expect(checkbox.length).toBe(1);
  });

  it('should render the same number of checkbox groups as elements in options array', () => {
    const { getAllByTestId } = setup();
    const checkboxGroup = getAllByTestId("checkboxGroup");
    expect(checkboxGroup.length).toBe(defaultProps.options.length);
  });

  it('should trigger the changeFn callback on input change', () => {
    const onChange = jest.fn();
    const { getAllByTestId } = setup({ onChange: onChange });
    const checkboxInputs = getAllByTestId("checkboxInput");
    fireEvent.change(checkboxInputs[0]);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  
  it('should trigger the blueFn callback on blur', () => {
    const onBlur = jest.fn();
    const { getAllByTestId } = setup({ onBlur: onBlur });
    const checkboxInputs = getAllByTestId("checkboxInput");
    fireEvent.blur(checkboxInputs[0]);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});