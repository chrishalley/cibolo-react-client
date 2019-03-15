import React from 'react';
import { shallow } from 'enzyme';

import UserBadge from './UserBadge';

describe('UserBadge', () => {

  it('should render the default and color props', () => {
    const wrapper = shallow(<UserBadge />);
    expect(wrapper.text()).toMatch('XX');
  });

  it('should render the initials passed in as props', () => {
    const initials = "ch";
    const wrapper = shallow(<UserBadge text={initials}/>);
    expect(wrapper.text()).toMatch(initials);
  });
})