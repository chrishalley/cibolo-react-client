import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';

import { TextArea } from './TextArea';

afterEach(cleanup);

describe('TextArea basic tests', () => {

  const defaultProps = {
    placeholder: 'zxcvbnm',
    onChange: () => {},
    onBlur: () => {},
    defaultValue: 'abcdefg',
    name: 'test'
  }

  const setup = (props) => {
    return render(<TextArea {...defaultProps} {...props} />)
  }

  it('should render', () => {
    const { getByTestId } = setup();
    const textArea = getByTestId('textArea');
    expect(textArea).toBeTruthy();
  });

  it('should display an input with placeholder value when passed prop', () => {
    const { getByTestId } = setup();
    const textArea = getByTestId("textArea");
    expect(textArea.placeholder).toBe(defaultProps.placeholder);
  });

  it('should call onChange callback when input is altered', () => {
    const onChange = jest.fn();
    const { getByTestId } = setup({ onChange: onChange });
    const textArea = getByTestId("textArea");
    fireEvent.change(textArea, { target: { value: 'zxyvbn' } });
    expect(textArea).toHaveTextContent("zxyvbn");
    expect(onChange).toHaveBeenCalledTimes(2);
  })

  it('should call onBlur callback when input is altered', () => {
    const onBlur = jest.fn();
    const { getByTestId } = setup({ onBlur: onBlur });
    const textArea = getByTestId("textArea");
    fireEvent.blur(textArea);
    expect(onBlur).toHaveBeenCalledTimes(1);
  })

  it('should contain a value if passed in as a prop', () => {
    const { getByTestId } = setup();
    const textArea = getByTestId("textArea");
    expect(textArea.defaultValue).toBe(defaultProps.defaultValue);
  })

  it('should display the value in a non-editable <p> tag if disabled prop is passed', () => {
    const { getAllByTestId, queryAllByTestId } = setup({ disabled: true });
    const textArea = queryAllByTestId("textArea");
    const readOnly = getAllByTestId('readOnly');
    expect(textArea.length).toBe(0);
    expect(readOnly.length).toBe(1);

  })
});