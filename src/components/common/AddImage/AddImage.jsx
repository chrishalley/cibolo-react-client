import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Dropzone, BasicButton, SecondaryButton, SVGIcon } from '..';
import { TextInput } from '../FormBuilder/components/inputs';
import styles from './AddImage.module.css';

const AddImage = (props) => {

  // const [mode, setMode] = useState(null);
  const [image, setImage] = useState('');

  // const onChangeHandler = () => {
  //   console.log('change***')
  // };

  // const renderContents = () => {
  //   switch (mode) {
  //     case 'file':
  //       return <Dropzone></Dropzone>
  //     case 'link':
  //       return <TextInput name="avatar.profileImage" onChange={(value) => setFile(value)}></TextInput>
  //     default:
  //       return (
  //         <Fragment>
  //           <BasicButton onClick={() => setMode('file')}>
  //             <SVGIcon icon="document-approved" />
  //             <span>Upload File</span>
  //           </BasicButton>
  //           <BasicButton onClick={() => setMode('link')}>
  //             <SVGIcon icon="eye" />
  //             <span>Use Weblink</span>
  //           </BasicButton>
  //         </Fragment>
  //       )
  //   }
  // }

  return (
    <div className={styles['add-image']} data-testid="addImage">
      <img style={{ width: '200px' }} src={image} alt=""/>
      <Dropzone name="image" />
      <p>or enter a link below</p>
      <TextInput name="image" onChange={(value) => setImage(value)} />
      <p>{image}</p>
    </div>
  );
}

export { AddImage };