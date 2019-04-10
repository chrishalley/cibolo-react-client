import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  images: PropTypes.array
}

const defaultProps = {

}

const Carousel = props => {

  const { images } = props;

  const slides = images.map((image, i) => {
    return (
      <img key={i} data-testid="carouselSlide" src={image.src} alt={image.alt}/>
    );
  })

  return images.length > 0 && (
    <div data-testid="carousel">
      {slides}
    </div>
  )
};

Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;

export default Carousel;