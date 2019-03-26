import React from 'react';
import { render, cleanup } from 'react-testing-library';

import { AddImage } from './AddImage';

afterEach(cleanup);

describe('AddImage', () => {

  const defaultProps = {

  }

  const setup = props => {
    return render(<AddImage {...defaultProps} {...props} />);
  }

  it('should render', () => {
    const { getAllByTestId } = setup();
    expect(getAllByTestId('addImage').length).toEqual(1);
  });
});