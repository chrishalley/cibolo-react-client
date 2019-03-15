import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { BasicButton } from '../../../../';
import { TextInput, FileInput } from '../';

import styles from './ImageInput.module.css';

const ImageInput = () => {

  const [mode, setMode] = useState(null);
  const [image, setImage] = useState(null);

  const changeHandler = (data) => {
    console.log(data)
    setImage(data.value);
  }

  const renderInputField = () => {
    if (mode === 'link') {
      return <TextInput name="imageSrc" type="text" placeholder="eg. http://www.example.com/image.jpg" onChange={changeHandler} />
    } else if (mode === 'file') {
      return <FileInput name="imageSrc" onChange={changeHandler}/>
    } else {
      return <p>Something's gone wrong</p>
    }
  }

  return (
    <div className={styles.imageInput}>
      <img className={styles.imagePreview} src={image} alt="" />
      <div className={styles.imageInputControl}>
        <div className={styles.imageInputControlButtons}>
          <BasicButton className={[styles.button, mode === 'file' && 'active'].join(' ')} onClick={() => setMode('file')}>Upload file</BasicButton>
          <BasicButton className={[styles.button, mode === 'link' && 'active'].join(' ')} onClick={() => setMode('link')}>URL link</BasicButton>
        </div>
        {renderInputField()}
      </div>
    </div>
  )
}

export { ImageInput };