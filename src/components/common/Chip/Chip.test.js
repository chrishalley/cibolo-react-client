import React from 'react';
import { render, cleanup } from 'react-testing-library';

import { Chip } from './Chip';

afterEach(cleanup);

describe('Chip', () => {

  const defaultProps = {

  }

  const setup = props => {
    return render(<Chip {...defaultProps} {...props} />);
  }

  it('should render', () => {
    const { getByTestId } = setup();
    expect(getByTestId('chip')).toBeInTheDocument();
  });
});