import React from 'react';
import { shallow } from 'enzyme';

import { FileInput } from './FileInput';

let wrapper;

describe('FileInput', () => {
  beforeEach(() => {
    wrapper = shallow(<FileInput />);
  })

  afterEach(() => {
    wrapper.unmount();
  });

  it('should contain a single <input> tag', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });
});