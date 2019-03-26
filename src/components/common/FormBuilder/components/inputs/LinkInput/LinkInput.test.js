import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';

import { LinkInput } from './LinkInput';

describe('LinkInput', () => {

  afterEach(cleanup)

  const defaultProps = {
    name: 'link'
  }

  const setup = (props) => {
    return render(<LinkInput {...defaultProps} {...props}/>)
  }

  it('should render without crashing', () => {
    const { getAllByTestId } = setup();
    expect(getAllByTestId('linkInput').length).toBe(1);
  });

  it('should render an add link button', () => {
    const { getAllByTestId } = setup();
    expect(getAllByTestId('addLink').length).toBe(1);
  });

  it('should render a textInput', () => {
    const { getAllByTestId } = setup();
    expect(getAllByTestId('textInput').length).toBe(1);
  });

  it('should add a link to the list when the addLink button is clicked and clear the input box', () => {
    const { getAllByTestId, getByTestId } = setup();
    const input = getByTestId("textInput");
    const addButton = getByTestId("addLink");
    expect(input.value).toEqual('');
    fireEvent.change(input, { target: { value: 'test link' } });
    expect(input.value).toEqual('test link');
    fireEvent.click(addButton);
    const links = getAllByTestId('linkItem');
    expect(links.length).toBe(1);
    expect(input.value).toBe('');
  })

  it('should remove a link when the removeLink button is clicked', () => {
    const testLinks = ['a', 'b', 'c'];
    const { getAllByTestId } = setup({ links: testLinks });
    const removeButtons = getAllByTestId('removeLink');
    let links = getAllByTestId('linkItem');
    expect(links.length).toBe(testLinks.length);
    fireEvent.click(removeButtons[0]);
    let updatedLinks = getAllByTestId('linkItem');
    expect(updatedLinks.length).toBe(testLinks.length - 1);
  });

});