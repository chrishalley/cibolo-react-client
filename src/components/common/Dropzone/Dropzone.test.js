import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';

import { Dropzone } from './Dropzone';

afterEach(cleanup);

describe('Dropzone', () => {

  const defaultProps = {

  }

  const setup = props => {
    return render(<Dropzone {...defaultProps} {...props}/>);
  }
  
  it('should render', () => {
    const { getByTestId } = setup();
    expect(getByTestId('dropzone-wrapper')).toBeInTheDocument();
  });

  it('should render a list of files when passed in as props', () => {
    const { queryAllByTestId } = setup({ files: [{name: 'abcdefg'}, {name: 'zxcvbnm'}] });
    expect(queryAllByTestId('fileListItem').length).toBe(2);
  });

  it('should not render this list of files is a prop of showList is set to false', () => {
    const { queryByTestId } = setup({ files: [{ name: 'abcdefg' }, { name: 'zxcvbnm' }], showList: false });
    expect(queryByTestId('fileList')).not.toBeInTheDocument();
  });
});