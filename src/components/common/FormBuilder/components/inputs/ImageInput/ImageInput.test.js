import React from 'react';
import { mount } from 'enzyme';

import { ImageInput } from './ImageInput';

let wrapper;

describe('ImageInput', () => {

  beforeEach(() => {
    wrapper = mount(<ImageInput />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render a single <img> tag', () => {
    expect(wrapper.find('img').length).toEqual(1);
  });

  it('should render two buttons, one for file uploads, one for URL links', () => {
    expect(wrapper.find('button').length).toEqual(2);
    const fileButton = wrapper.find('button').at(0);
    const linkButton = wrapper.find('button').at(1);
    expect(fileButton.text()).toMatch(/file/i);
    expect(linkButton.text()).toMatch(/link/i);
  });

  it('clicking on the link button should reveal a text input', () => {
    expect(wrapper.find('input').length).toBe(0);
    const linkButton = wrapper.find('button').at(1);
    linkButton.simulate('click');
    wrapper.update();
    expect(wrapper.find('input').length).toBe(1);
    
  });
});