import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';

import { LinkInput } from './LinkInput';

afterEach(cleanup);

describe('LinkInput', () => {


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
    let input = getByTestId("textInput");
    const addButton = getByTestId("addLink");
    expect(input.value).toEqual('');
    fireEvent.change(input, { target: { value: 'test link' } });
    expect(input.value).toEqual('test link');
    fireEvent.click(addButton);
    const links = getAllByTestId('fileListItem');
    expect(links.length).toBe(1);
    input = getByTestId("textInput");
  })

  it('should remove a link when the remove button button is clicked', () => {
    const testLinks = [{ url: 'a' }, { url: 'b' }, { url: 'c' }];
    const { getAllByTestId, debug } = setup({ links: testLinks });
    const removeButtons = getAllByTestId('removeButton');
    let links = getAllByTestId('fileListItem');
    expect(links.length).toBe(testLinks.length);
    fireEvent.click(removeButtons[0]);
    let updatedLinks = getAllByTestId('fileListItem');
    expect(updatedLinks.length).toBe(testLinks.length - 1);
  });

  it('should not add a link if the input is empty', () => {
    const { queryAllByTestId, getByTestId } = setup();
    const addLink = getByTestId('addLink');
    expect(queryAllByTestId('fileListItem').length).toBe(0);
    fireEvent.click(addLink);
    expect(queryAllByTestId('fileListItem').length).toBe(0);
  })

  it('should not render a list of links when the showList prop is passed as false', () => {
    const testLinks = ["a", "b", "c"];
    const { queryByTestId } = setup({ links: testLinks, showList: false});
    expect(queryByTestId('fileList')).not.toBeInTheDocument();
  })

});