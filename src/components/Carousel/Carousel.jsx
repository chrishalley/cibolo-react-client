import React, { useState, forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';

import styles from './Carousel.module.css';

const propTypes = {
  images: PropTypes.array,
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

const defaultProps = {

}

const CarouselWrapper = forwardRef((props, ref) => {
  const { slides, maxHeight } = props;

  const wrapperStyle = {
    maxHeight: maxHeight ? `${maxHeight}px` : "auto",
    backgroundColor: "teal"
  };

  return (
    <div
      ref={ref}
      className={styles["carousel-wrapper"]}
      style={{ ...wrapperStyle }}
    >
      {slides}
    </div>
  );
});

const PosedCarouselWrapper = posed(CarouselWrapper)({
  offset: {
    x: ({index}) => `${-index * 100}%`,
    transition: {
      duration: 1200,
      ease: 'easeInOut'
    }
  }
});

const Carousel = props => {

  const [index, setIndex] = useState(0);

  const { images, target, ...restProps } = props;

  const slides = images.map((image, i) => {

    return (
      <div className={styles['slide-wrapper']} key={i}>
        <img
          className={styles["image"]}
          data-testid="carouselSlide"
          src={image.imgUrl}
          alt={image.alt}
        />
        <div className={styles['slide-info']}>
          <h2>{image.title}</h2>
          <p>{image.startDateTime}</p>
          <p>{i}</p>
        </div>
      </div>
    );
  })

  const changeSlide = (step) => {
    if (index + step > images.length - 1) {
      return setIndex(0);
    } else if (index + step < 0) {
      return setIndex(images.length - 1);
    } else {
      setIndex(index + step);
    }
  }

  const renderPips = () => {
    return (
      <ul className={styles['pips']}>
        {images.map((image, i) => {
          let classes = [styles['pip']];
          i === index && classes.push(styles['pip-active']);
          return <li key={i} className={classes.join(' ')}></li>
        })}
      </ul>
    )
  }

  return (
    images.length > 0 && (
      <div className={styles["carousel"]} data-testid="carousel">
        <PosedCarouselWrapper pose='offset' poseKey={index} index={index} slides={slides} {...restProps} />
        <div className={styles['navigation']}>
          <button style={{padding: '1rem'}} onClick={() => changeSlide(-1)}>Prev</button>
          <button style={{padding: '1rem'}} onClick={() => changeSlide(+1)}>Next</button>
        </div>
        {renderPips()}
      </div>
    )
  );
};

Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;

export default Carousel;