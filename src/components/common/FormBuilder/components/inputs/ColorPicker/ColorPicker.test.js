import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';

import { ColorPicker } from './ColorPicker';

describe('ColorPicker', () => {

  const colors = [
    '#00BCD4',
    '#F79256',
    '#FBD1A2',
    '#7DCFB6',
    '#1D4E89',
    '#FC5130',
    '#06908F',
    '#7AE582'
  ];

  let wrapper;

  const defaultProps = {
    colors: colors,
    onChange: () => {}
  }

  const setup = (props) => {
    return render(<ColorPicker {...defaultProps} {...props} />)
  }
  
  afterEach(cleanup);

  it('should have one radio input for each color entered in colors props', () => {
    const { getAllByTestId } = setup();
    const colorPickerInputs = getAllByTestId('color-picker-input');
    expect(colorPickerInputs.length).toEqual(colors.length);
  });

  it('should only have one input with prop of selected', () => {
    const { getAllByTestId } = setup();
    const colorPickerInputs = getAllByTestId("color-picker-input-radio");
    const selected = colorPickerInputs.filter(input => input.checked);
    expect(selected.length).toBe(1);
  })

  it('should apply the selected class to the input for the first index of the array', () => {
    const { getAllByTestId } = setup();
    const colorPickerInputs = getAllByTestId("color-picker-input-radio");
    expect(colorPickerInputs[0].value).toBe(colors[0]);
  });

  it('should switch the checked property from the default first input to the second on click', () => {
    const { getAllByTestId } = setup();
    const colorPickerInputs = getAllByTestId("color-picker-input-radio");
    const secondButton = colorPickerInputs[1];
    expect(secondButton.checked).toBeFalsy();
    fireEvent.click(secondButton);
    expect(secondButton.checked).toBeTruthy();
  });

});