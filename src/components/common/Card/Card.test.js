import React from 'react';
import { mount } from 'enzyme';

import Card from './Card';

const testContent = 'This is some test content';

describe('Card Component', () => {

  it('should render without crashing', () => {
    const wrapper = mount(<Card><p>{testContent}</p></Card>);
    expect(wrapper.render().text()).toContain(testContent);
  });

  it('should render a close button when passed a closeMethod prop', () => {
    const wrapper = mount(<Card closeMethod={() => {}}></Card>);
    expect(wrapper.find('button').length).toEqual(1);
    expect(wrapper.find('button').hasClass('card-close')).toBeTruthy();
  });

  it('should render a title header when passed a title prop', () => {
    const wrapper = mount(<Card title={testContent}></Card>)
    expect(wrapper.find('header').length).toEqual(1);
    expect(wrapper.find('header').text()).toMatch(testContent);
  });
});