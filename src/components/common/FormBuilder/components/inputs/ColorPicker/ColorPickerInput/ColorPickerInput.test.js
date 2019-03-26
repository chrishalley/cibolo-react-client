import React from 'react';
// import { shallow } from 'enzyme';
import { render, fireEvent, cleanup } from 'react-testing-library';

import ColorPickerInput from './ColorPickerInput';

afterEach(cleanup);

describe('ColorPickerInput', () => {

  const defaultProps = {
    color: "rgb(0, 255, 0)",
    onChange: () => {},
    selected: true
  };

  const setup = (props) => {
    return render(<ColorPickerInput {...defaultProps} {...props} />)
  }

  it('should render a checkbox with background color equal to color prop', () => {
    const { getByTestId } = setup();
    const label = getByTestId('color-picker-input-label');
    expect(label).toHaveStyle(`background-color: ${defaultProps.color}`);
  });

});