import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';

import Carousel from './Carousel';

afterEach(cleanup);

describe('Carousel', () => {

  const defaultProps = {
    images: [
      {
        src: 'https://www.pexels.com/image.jpg',
        alt: 'Some random text'
      },
    ]
  }

  const setup = props => {
    return render(<Carousel {...defaultProps} {...props} />);
  };

  it('should render', () => {
    const { queryByTestId } = setup();
    const carousel = queryByTestId('carousel');
    expect(carousel).toBeInTheDocument();
  });

  it('should render the same number of images as passed in via props', () => {
    const images = [
      {
        src: 'https://www.pexels.com/image.jpg',
        alt: 'Some random text'
      },
      {
        src: 'https://www.pexels.com/image2.jpg',
        alt: 'Some random text'
      },
      {
        src: 'https://www.pexels.com/image3.jpg',
        alt: 'Some random text'
      },
    ]

    const { getAllByTestId } = setup({ images });
    const carouselSlides = getAllByTestId('carouselSlide');
    expect(carouselSlides.length).toBe(images.length);
  });

  it('should not render when 0 images are passed as prop', () => {
    const images = [];
    const { queryByTestId } = setup({images});
    const carousel = queryByTestId("carousel");
    expect(carousel).not.toBeInTheDocument();
  });

});