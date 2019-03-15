import React from 'react';
import { mount } from 'enzyme';

import { EditUserAvatar } from './EditUserAvatar';
import { UserAvatar } from '../UserAvatar/UserAvatar';

describe('EditUserAvatar', () => {
  it('should contain one instance of the UserAvatar component', () => {
    const wrapper = mount(<EditUserAvatar />);
    expect(wrapper.find(UserAvatar).length).toEqual(1);
  });
});