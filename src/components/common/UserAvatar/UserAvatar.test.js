import React from 'react';
import { mount } from 'enzyme';

import { UserAvatar } from './UserAvatar';
import UserImage from './UserImage/UserImage';
import UserBadge from './UserBadge/UserBadge';

const users = [
  {
    firstName: 'John',
    lastName: 'Smith',
    avatar: {
      profileImage: 'https://images.pexels.com/photos/1675870/pexels-photo-1675870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      color: '#21f5ff'
    }
  },
  {
    firstName: 'Fred',
    lastName: 'Flintstone',
    avatar: {
      profileImage: null,
      color: '#17730c'
    }
  },
  {
    firstName: 'John',
    lastName: 'Smith',
    avatar: {
      profileImage: 'https://images.pexels.com/photos/1675870/pexels-photo-1675870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    }
  },
]

describe('UserAvatar', () => {

  it('should render a UserImage for users with a non-null avatar.profileImage property', () => {
    const wrapper = mount(<UserAvatar user={users[0]}/>);
    expect(wrapper.find(UserImage).length).toEqual(1);
    expect(wrapper.find('img').length).toEqual(1);
  });
  
  it('should render a UserBadge for users with a null avatar.profileImage property', () => {
    const wrapper = mount(<UserAvatar user={users[1]}/>);
    expect(wrapper.find(UserBadge).length).toEqual(1);
    expect(wrapper.text()).toMatch(`FF`);
  });

  it('should have a border color equal to the user\'s avatar.color property', () => {
    const userOneWrapper = mount(<UserAvatar user={users[0]}/>);
    const userTwoWrapper = mount(<UserAvatar user={users[1]}/>);
    expect(userOneWrapper.find('div').get(0).props.style).toHaveProperty('borderColor', users[0].avatar.color);
    expect(userTwoWrapper.find('div').get(0).props.style).toHaveProperty('borderColor', users[1].avatar.color);
  });

  it('should render with a default border if no avatar.color property is supplied', () => {
    const wrapper = mount(<UserAvatar user={users[2]}/>);
    expect(wrapper.find('div').get(0).props.style).toHaveProperty('borderColor', '#00BCD4');
  });

});