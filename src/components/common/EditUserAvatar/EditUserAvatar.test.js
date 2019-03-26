import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';

import { EditUserAvatar } from './EditUserAvatar';

afterEach(cleanup);

describe('EditUserAvatar', () => {

  const defaultProps = {
    // user: {
    // firstName: 'Joe',
    // lastName: 'Smith',
    //   avatar: {
    //     profileImage: null,
    //     color: '#FF0000'
    //   }
    // }
    onChange: () => {}
  }

  const setup = props => {
    return render(<EditUserAvatar {...defaultProps} {...props} />)
  }

  it('should contain one instance of the UserAvatar component', () => {
    const { getAllByTestId } = setup();
    const userAvatar = getAllByTestId('avatar-wrapper');
    expect(userAvatar.length).toBe(1);
  });
});