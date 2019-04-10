import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';

import { FileList } from './FileList';

afterEach(cleanup);

describe('FileList', () => {

  const defaultProps = {
    files: [
      { name: 'File 1' },
      { name: 'File 2' },
      { name: 'File 3' },
      { name: 'File 4' }
    ]
  }

  const setup = props => {
    return render(<FileList {...defaultProps} {...props} />);
  };

  it('should render', () => {
    const { getByTestId } = setup();
    const fileList = getByTestId('fileList');
    expect(fileList).toBeInTheDocument();
  });

  it('should render the same number of fileListItems as elements in the files array', () => {
    const { getAllByTestId } = setup();
    const files = getAllByTestId('fileListItem');
    expect(files.length).toBe(defaultProps.files.length);
  });

  it('should call the onRemove callback when a remove button is pressed', () => {
    const onRemove = jest.fn();
    const { getByTestId } = setup({ onRemove: onRemove });
    const button = getByTestId("removeButton");
    fireEvent.click(button);
    expect(onRemove).toHaveBeenCalled();
  });

});