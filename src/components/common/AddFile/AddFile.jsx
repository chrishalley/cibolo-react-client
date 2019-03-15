import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Dropzone, BasicButton, SecondaryButton, SVGIcon } from '../';
import { TextInput } from '../FormBuilder/components/inputs';
import styles from './AddFile.module.css';

const AddFile = () => {

  const [mode, setMode] = useState(null)

  const renderContents = () => {
    switch (mode) {
      case 'file':
        return <Dropzone></Dropzone>
      case 'link':
        return <TextInput></TextInput>
      default:
        return (
          <Fragment>
            <BasicButton onClick={() => setMode('file')}>
              <SVGIcon icon="document-approved" />
              <span>Upload File</span>
            </BasicButton>
            <BasicButton onClick={() => setMode('link')}>
              <SVGIcon icon="eye" />
              <span>Use Weblink</span>
            </BasicButton>
          </Fragment>
        )
    }
  }

  return (
    <div className={styles['add-file']} data-test="addFile">
      {mode !== null && <BasicButton className={styles.back} onClick={() => setMode(null)}><SVGIcon icon="arrow-left"/></BasicButton>}
      {renderContents()}
    </div>
  );
}

export { AddFile };