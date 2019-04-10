import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { SVGIcon, SecondaryButton } from '../../../..';
import { LinkInput } from '..';
import styles from './ImageInput.module.css';

const propTypes = {
  initialImage: PropTypes.object,
  onChange: PropTypes.func,
  acceptedTypes: PropTypes.array
}

const defaultProps = {
  acceptedTypes: ["jpg", "jpeg", "png", "bmp", "gif"],
  onChange: () => console.warn('onChange callback not defined')
};

const checkFileType = (file, acceptedTypes) => {
  const nameArray = file.name.split('.');
  const extension = (nameArray[nameArray.length - 1]);
  return acceptedTypes.includes(extension)
}

const ImageInput = ({initialImage, onChange, acceptedTypes, ...restProps}) => {
  const [image, setImage] = useState(initialImage || null);

  useEffect(() => {
    if (image && image.url) {
      onChange(image);
    } else {
      onChange(null);
    }
  }, [image])

  const [highlight, setHighlight] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const fileInputRef = useRef();

  const removeImage = () => {
    setImage(null);
  }

  const addImage = (val) => {
    setImage({url: val.url});
    setHighlight(false);
  }

  const openFileDialog = e => {
    e.stopPropagation();
    console.log('Error', e);
    fileInputRef.current.click();
  }

  const readFile = (file) => {
    console.log(file);
    if (file && checkFileType(file, acceptedTypes)) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = file => setImage({ url: file.target.result });
    } else {
      console.error('filetype not supported')
      setErrorMessage('File type not supported')
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000)
    }
    
  }

  const onDragOver = e => {
    e.preventDefault();
    setHighlight(true);
  }

  const onDragLeave = e => {
    setHighlight(false);
  }

  const onDropHandler = e => {
    e.preventDefault();
    readFile(e.dataTransfer.files[0]);
    setHighlight(false);
  }

  const renderDropzoneContents = () => {
    return image ? (
      <div className={styles['image-preview-wrapper']}>
        <img className={styles['image-preview']} src={image.url} alt="preview" data-testid="imagePreview"/>
        <SecondaryButton className={styles['button-image-remove']} onClick={removeImage}><SVGIcon width="1rem" strokeWidth="20" icon="close"/></SecondaryButton>
      </div>
      ) : (
      <div 
        className={styles['dropzone-add']}
        onMouseEnter={() => setHighlight(true)}
        onMouseLeave={() => setHighlight(false)}
        onClick={(e) => openFileDialog(e)}
        onDragOver={(e) => onDragOver(e)}
        onDragLeave={(e) => onDragLeave(e)}
        onDrop={(e) => onDropHandler(e)}
      >
        <span className={styles['dropzone-info']}>
          <SVGIcon icon='add' style={{ margin: '1rem' }}/>
          Drag image or click to add from folder<br /><br />
          or add via URL link
        </span>
        <LinkInput showList={false} onChange={addImage}/>
        <p style={{paddingTop: '1rem', fontSize: '1.4rem', marginBottom: '0'}}>Accepted file types: {acceptedTypes.join(', ')}</p>
        <input 
          className={styles['fileInput']}
          ref={fileInputRef}
          type='file'
          onClick={(e) => {e.stopPropagation()}}
          onChange={(e) => readFile(e.target.files[0])}
        />
      </div>
    )
  }

  return (
    <div className={styles['addImage']} data-testid='addImage'>
      <div
        className={[styles['dropzone-wrapper'], highlight ? styles['highlight-outline'] : ''].join(' ')}
        data-testid='dropzone-wrapper'
      >
        <div className={styles['dropzone-core']} data-testid='dropzone-core'>
          {renderDropzoneContents()}
        </div>
      </div>
      { errorMessage && <p className={styles['error-message']}>{errorMessage}</p> }
    </div>
  );
}

ImageInput.propTypes = propTypes;
ImageInput.defaultProps = defaultProps;

export { ImageInput };

