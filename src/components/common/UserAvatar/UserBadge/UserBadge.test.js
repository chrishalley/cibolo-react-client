import React from 'react';
import { shallow } from 'enzyme';

import UserBadge from './UserBadge';

describe('UserBadge', () => {

  it('should render the default initials and color props', () => {
    const wrapper = shallow(<UserBadge />);
    const wrapperStyle = wrapper.get(0).props.style;
    expect(wrapper.text()).toMatch('XX');
    expect(wrapperStyle).toHaveProperty('backgroundColor', '#00BCD4');
  });

  it('should render the initials passed in as props', () => {
    const initials = "ch";
    const wrapper = shallow(<UserBadge text={initials}/>);
    expect(wrapper.text()).toMatch(initials);
  });

  it('should have a background color equal to the color prop passed in', () => {
    const color = '#0000ff';
    const wrapper = shallow(<UserBadge color={color} />);
    const wrapperStyle = wrapper.get(0).props.style;
    expect(wrapperStyle).toHaveProperty('backgroundColor', color);
  });
})