import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';

import { Select } from './Select';

afterEach(cleanup);

describe('Select basic tests', () => {
  const options = [
    { label: 'a', value: 'A' },
    { label: 'b', value: 'B' },
    { label: 'c', value: 'C' },
    { label: 'd', value: 'D' },
    { label: 'e', value: 'E' }
  ];

  const defaultProps = {
    options: options,
    name: 'test',
    defaultValue: 'E',
    onChange: () => {}
  }

  const setup = props => {
    return render(<Select {...defaultProps} {...props} />)
  }

  it('should render', () => {
    const { getAllByTestId } = setup();
    const selects = getAllByTestId('select');
    expect(selects.length).toBe(1);
  });

  it('should render a number of options equal to the length of the array passed in as option prop', () => {
    const { getAllByTestId } = setup();
    const selectOptions = getAllByTestId("selectOption");
    expect(selectOptions.length).toBe(defaultProps.options.length);
  });

  it('should have an initial value attribute equal to the defaultValue prop passed into component', () => {
    const { getByTestId } = setup();
    const select = getByTestId("select");
    expect(select.value).toBe(defaultProps.defaultValue);
  });

  it('should trigger the onChange callback when changed', () => {
    const onChange = jest.fn();
    const { getByTestId } = setup({ onChange: onChange });
    const select = getByTestId("select");
    fireEvent.change(select, { target: { value: 'D'} })
    expect(onChange).toHaveBeenCalledTimes(2); // once for initialisation?
  });

  it('should trigger the onBlur callback when changed', () => {
    const onBlur = jest.fn();
    const { getByTestId } = setup({ onBlur: onBlur });
    const select = getByTestId("select");
    fireEvent.blur(select)
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it('should display the passed value prop in a read-only <p> tag if the disabled prop is true', () => {
    const { queryAllByTestId, getAllByTestId, debug } = setup({ disabled: true });
    debug();
    const selects = queryAllByTestId("select");
    const readOnly = getAllByTestId("readOnly");
    expect(selects.length).toBe(0);
    expect(readOnly.length).toBe(1);
    expect(readOnly[0].textContent).toBe(defaultProps.defaultValue);
  })

});