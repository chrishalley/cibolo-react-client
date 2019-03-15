import React from 'react';
import { shallow } from 'enzyme';

import ColorPickerInput from './ColorPickerInput';

describe('ColorPickerInput', () => {
  it('should render a checkbox with background color equal to color prop', () => {
    const wrapper = shallow(<ColorPickerInput color="#FF0000" />);
    expect(wrapper.find('input[type="radio"]').length).toEqual(1);
  });

  it('should have a CSS style of .selected if the selected prop is passed', () => {
    const wrapper = shallow(<ColorPickerInput selected color="#FF0000" />);
    expect(wrapper.find('input[type="radio"]').get(0).props.className).toContain('selected');
  })
});