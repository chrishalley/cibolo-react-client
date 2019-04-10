import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';

import { ImageInput } from './ImageInput';

const validUrl = 'https://images.pexels.com/photos/2084699/pexels-photo-2084699.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';

describe('ImageInput', () => {

  const defaultProps = {

  };

  const setup = props => render(<ImageInput {...defaultProps} {...props} />)

  it('should render', () => {
    const { queryByTestId } = setup();
    const addImage = queryByTestId('addImage');
    expect(addImage).toBeInTheDocument();
  });

  it('should render an image if passed in as a prop', () => {
    const { queryByTestId } = setup({ initialImage: { src: validUrl }});
    const imagePreview = queryByTestId("imagePreview");
    expect(imagePreview).toBeInTheDocument();
  });

  it('should render an image if a valid url is submitted via the linkInput', () => {
    const { queryByTestId, getByTestId } = setup();
    const textInput = getByTestId('textInput');
    const addLink = getByTestId('addLink');
    fireEvent.change(textInput, { target: { value: validUrl } });
    fireEvent.click(addLink);
    const imagePreview = queryByTestId("imagePreview");
    expect(imagePreview).toBeInTheDocument();
  });

});