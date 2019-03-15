import React from 'react';
import { mount } from 'enzyme';

import { ColorPicker } from './ColorPicker';
import ColorPickerInput from './ColorPickerInput/ColorPickerInput';

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

  beforeEach(() => {
    wrapper = mount(<ColorPicker colors={colors} />)
  });
  
  afterEach(() => {
    wrapper.unmount();
  });

  it('should have one radio input for each color entered in colors props', () => {
    expect(wrapper.find('input[type="radio"]').length).toEqual(colors.length);
  });

  it('should only have one input with prop of selected', () => {
    expect(wrapper.find('input[checked=true]').length).toEqual(1);
  })

  it('should apply the selected class to the input for the first index of the array', () => {
    expect(wrapper.find(`#color_${colors[0].slice(1)}`).hasClass('selected')).toEqual(true);
  });

  it('should switch the checked property from the default first input to the second on click', () => {
    expect(wrapper.find(`#color_${colors[0].slice(1)}`).hasClass('selected')).toEqual(true);
    expect(wrapper.find(`#color_${colors[1].slice(1)}`).hasClass('selected')).toEqual(false);
    wrapper.find(`#color_${colors[1].slice(1)}`).simulate('change')
    wrapper.update();
    expect(wrapper.find(`#color_${colors[1].slice(1)}`).hasClass('selected')).toEqual(true);
    expect(wrapper.find(`#color_${colors[0].slice(1)}`).hasClass('selected')).toEqual(false);
  });

});