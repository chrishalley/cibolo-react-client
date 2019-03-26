import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';

import { TextInput } from './TextInput';

afterEach(cleanup);

describe('Input tests', () => {
  
  const defaultProps = {
    name: 'test',
    onChange: () => {}
  }

  const setup = props => {
    return render(<TextInput {...defaultProps} {...props} />)
  }

  it('should contain one input element', () => {
    const { getAllByTestId } = setup();
    const textInputs = getAllByTestId('textInput');
    expect(textInputs.length).toBe(1);
  });

  it('should contain the text of the value prop passed in', () => {
    const { getByTestId } = setup({ value: 'abcdefg' });
    const textInput = getByTestId('textInput');
    expect(textInput.value).toBe('abcdefg');
  });

  xit('should use the readOnly if disabled is passed in', () => {

  })

  // ToDo: Write more tests!
});