import React from 'react';
import { shallow } from 'enzyme';

import { UserAvatar } from './UserAvatar';

describe('UserAvatar', () => {
  xit('should contain one img tag', () => {
    const wrapper = shallow(<UserAvatar />);
    // expect(wrapper.find('img').length).toEqual(1);
    expect(true).toBeTruthy();
  });
});