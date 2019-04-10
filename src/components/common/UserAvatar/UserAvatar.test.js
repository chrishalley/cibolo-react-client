import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';

import { Chip } from '../';

import { UserAvatar } from './UserAvatar';

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
  const defaultProps = { user: users[0] };

  const setup = props => {
    return render(<UserAvatar {...defaultProps} {...props} />);
  };

  it('should render a UserImage for users with a non-null avatar.profileImage property', () => {
    const { getByTestId, queryByTestId } = setup();
    const avatarImage = getByTestId('avatarImage');
    const avatarBadge = queryByTestId('avatarBadge');
    expect(avatarImage).toBeInTheDocument();
    expect(avatarBadge).not.toBeInTheDocument();
  });
  
  it('should render a UserBadge for users with a null avatar.profileImage property', () => {
    const { getByTestId, queryByTestId } = setup({ user: users[1] });
    const avatarBadge = getByTestId('avatarBadge');
    const avatarImage = queryByTestId('avatarImage');
    expect(avatarBadge).toBeInTheDocument();
    expect(avatarImage).not.toBeInTheDocument();
  });

  it('should have a border color equal to the user\'s avatar.color property', () => {
    const avatarOne = setup({ user: users[0] });
    const avatarTwo = setup({ user: users[1] });

    expect(avatarOne.getByTestId('avatarWrapper')).toHaveStyle(`borderColor: ${users[0].avatar.color}`);
    expect(avatarTwo.getByTestId('avatarWrapper')).toHaveStyle(`borderColor: ${users[1].avatar.color}`);
  });

  it('should render with a default border if no avatar.color property is supplied', () => {
    const { getByTestId } = setup({ user: users[2] });
    expect(getByTestId('avatarWrapper')).toHaveStyle(`borderColor: #00BCD4`);
  });

  it('should feature a button chip if the button prop is passed in', () => {
    const chip = <Chip onClick={() => {}}>Test Chip</Chip>;
    const { getByTestId } = setup({ chip: chip });
    expect(getByTestId('chip')).toBeInTheDocument();
  });

  it('should display a badge with the initials of the user if that user does not have a profile image', () => {
    const { getByTestId } = setup({ user: users[1] });
    const badge = getByTestId('avatarBadge');
    expect(badge).toHaveTextContent('FF');
  });

});