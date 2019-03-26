import React from 'react';
import { shallow } from 'enzyme';

import { Submit } from './Submit';

describe('Submit basic tests', () => {
  
  const label = 'sdfghjkl';
  const wrapper = shallow(<Submit children={label}/>);
  const id = '[data-testid="submit"]'

  it('should render', () => {
    expect(wrapper.find(id).length).toEqual(1);
  });

  it('should contain the label text', () => {
    expect(wrapper.find(id).dive().text()).toEqual(label);
  })
});