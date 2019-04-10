import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';

import { FileListItem } from './FileListItem';

afterEach(cleanup);

describe('FileListItem', () => {

  const defaultProps = {
    file: { name: 'asdfghjkl' }
  }

  const setup = props => {
    return render(<FileListItem {...defaultProps} {...props} />);
  }

  it('should render', () => {
    const { getByTestId } = setup();
    expect(getByTestId('fileListItem')).toBeInTheDocument();
  });
  
  it('should call the onRemove click handler passed to the button', () => {
    const onRemove = jest.fn();
    const { getByTestId } = setup({ onRemove: onRemove });
    const button = getByTestId("removeButton");
    fireEvent.click(button)
    expect(onRemove).toHaveBeenCalled();
  });

  it('should contain the name of the file', () => {
    const { getByTestId } = setup();
    expect(getByTestId("fileListItem")).toHaveTextContent(defaultProps.file.name);
  })

});