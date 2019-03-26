import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { mount } from 'enzyme';

import { UserAvatar } from './UserAvatar';
import UserImage from './UserImage/UserImage';
import UserBadge from './UserBadge/UserBadge';
import { Chip } from '../';

afterEach(cleanup);

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
  let wrapper;

  const defaultProps = {
    user: users[0]
  }

  const setup = props => {
    return render(<UserAvatar {...defaultProps} {...props} />)
  }

  it('should render a UserImage for users with a non-null avatar.profileImage property', () => {
    const { getAllByTestId } = setup();
    const avatarImage = getAllByTestId('avatar-image')
    expect(avatarImage.length).toBe(1);
    // wrapper = mount(<UserAvatar user={users[0]}/>);
    // expect(wrapper.find(UserImage).length).toEqual(1);
    // expect(wrapper.find('img').length).toEqual(1);
    // wrapper.unmount();
  });
  
  // it('should render a UserBadge for users with a null avatar.profileImage property', () => {
  //   wrapper = mount(<UserAvatar user={users[1]}/>);
  //   expect(wrapper.find(UserBadge).length).toEqual(1);
  //   expect(wrapper.text()).toMatch(`FF`);
  //   wrapper.unmount();
  // });

  // it('should have a border color equal to the user\'s avatar.color property', () => {
  //   const userOneWrapper = mount(<UserAvatar user={users[0]}/>);
  //   const userTwoWrapper = mount(<UserAvatar user={users[1]}/>);
  //   expect(userOneWrapper.find('[data-test="avatar"]').get(0).props.style).toHaveProperty('borderColor', users[0].avatar.color);
  //   expect(userTwoWrapper.find('[data-test="avatar"]').get(0).props.style).toHaveProperty('borderColor', users[1].avatar.color);
  //   userOneWrapper.unmount();
  //   userTwoWrapper.unmount();
  // });

  // it('should render with a default border if no avatar.color property is supplied', () => {
  //   wrapper = mount(<UserAvatar user={users[2]}/>);
  //   expect(wrapper.find('[data-test="avatar"]').get(0).props.style).toHaveProperty('borderColor', '#00BCD4');
  //   wrapper.unmount();
  // });

  // it('should feature a button chip if the button prop is passed in', () => {
    
  //   const chip = <Chip onClick={() => {}}>Test Chip</Chip>;

  //   wrapper = mount(<UserAvatar chip={chip} user={users[0]}/>);
  //   expect(wrapper.find('Chip').length).toEqual(1);
  //   wrapper.unmount();
  //   wrapper = mount(<UserAvatar user={users[0]}/>);
  //   expect(wrapper.find('Chip').length).toEqual(0);
  //   wrapper.unmount();
  // });

});