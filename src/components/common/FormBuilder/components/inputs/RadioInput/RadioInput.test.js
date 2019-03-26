import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';

import { RadioInput } from './RadioInput';

afterEach(cleanup);

describe('RadioInput basic tests', () => {
  const options = [
    { label: 'a', value: 'A' },
    { label: 'b', value: 'B' },
    { label: 'c', value: 'C' },
    { label: 'd', value: 'D' },
    { label: 'e', value: 'E' },
  ];

  const defaultProps = {
    options: options,
    value: 'A',
    onChange: () => {},
    onBlur: () => {},
    name: 'test',
  }

  const setup = props => {
    return render(<RadioInput {...defaultProps} {...props} />)
  }

  it('should render', () => {
    const { getByTestId } = setup();
    const radioInput = getByTestId('radioInput');
    expect(radioInput).toBeTruthy();
  });

  it('should contain a same number inputs and labels as elements in options array', () => {
    const { getAllByTestId } = setup();
    const radioInputs = getAllByTestId("radioButton");
    const radioLabels = getAllByTestId("radioButtonLabel");
    expect(radioInputs.length).toBe(defaultProps.options.length);
    expect(radioLabels.length).toBe(defaultProps.options.length);
  });

  it('should have only one radio button with an attribute of checked', () => {
    const { getAllByTestId } = setup();
    const radioInputs = getAllByTestId("radioButton");
    const checked = radioInputs.filter(input => {
      return input.checked === true;
    })
    expect(checked.length).toBe(1)
  })
  
  it('the checked value should equal that of the value prop', () => {
    const { getAllByTestId } = setup();
    const radioInputs = getAllByTestId("radioButton");
    const checked = radioInputs.find(input => {
      return input.checked === true;
    });
    expect(checked.value).toBe(defaultProps.value);
  })

  it('should call the changeFn callback when value changes', () => {
    const onChange = jest.fn();
    const { getAllByTestId } = setup({ onChange: onChange });
    const radioInputs = getAllByTestId("radioButton");
    expect(radioInputs[0].checked).toBeTruthy();
    expect(radioInputs[1].checked).toBeFalsy();
    fireEvent.click(radioInputs[1]);
    expect(radioInputs[0].checked).toBeFalsy();
    expect(radioInputs[1].checked).toBeTruthy();
    expect(onChange).toHaveBeenCalledTimes(2); // once for setting of initial value
  })

  it('should call the blurFn callback when the parent container is blurred', () => {
    const onBlur = jest.fn();
    const { getAllByTestId } = setup({ onBlur: onBlur });
    const radioInputs = getAllByTestId("radioButton");
    fireEvent.blur(radioInputs[0]);
    expect(onBlur).toHaveBeenCalledTimes(1);
  })

});