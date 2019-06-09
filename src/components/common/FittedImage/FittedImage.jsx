import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import styles from './FittedImage.module.css';

const propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};

const defaultProps = {

};

const FittedImage = props => {
  const { src, alt, className, ...restProps } = props;

  const imgWrapperRef = useRef();
  const imgRef = useRef();

  if (restProps.onClick) restProps.style.cursor = 'pointer';
  const wrapperClasses = [styles['fitted-image__wrapper']];
  if (className) wrapperClasses.push(className);

  useEffect(() => {
    let { offsetWidth: parentOffsetWidth, offsetHeight: parentOffsetHeight } = imgWrapperRef.current;
    const parentRatio = parentOffsetHeight / parentOffsetWidth;
    imgRef.current.onload = () => {
      const imgRatio = imgRef.current.height / imgRef.current.width;
      // If difference between parentRatio and imgRatio is positive, image must be height 100%, else width 100%
      // console.log('parentRatio:', parentRatio);
      // console.log('imgRatio:', imgRatio);
      if (parentRatio - imgRatio > 0) {
        imgRef.current.style.height = '100%';
        imgRef.current.style.width = 'auto';
      } else {
        imgRef.current.style.height = 'auto';
        imgRef.current.style.width = '100%';
      }
    }
    imgRef.current.onload();
  }, [src])

  return (
    <div ref={imgWrapperRef} {...restProps} className={wrapperClasses.join(' ')}>
      <img ref={imgRef} style={{position: 'absolute', width: '100%'}} src={src} alt={alt}/>
    </div>
  )
}

FittedImage.propTypes = propTypes;
FittedImage.defaultProps = defaultProps;

export { FittedImage };