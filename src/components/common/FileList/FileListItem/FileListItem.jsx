import React from 'react';
import PropTypes from 'prop-types';

import { BasicButton, SVGIcon } from '../../';
import styles from './FileListItem.module.css';

const propTypes = {
  file: PropTypes.object
};

const defaultProps = {
  onRemove: () => console.warn('onRemove callback not provided')
};

const FileListItem = props => {

  const { file, onRemove } = props;

  return (
    <li data-testid="fileListItem" className={styles['file-list-item']}>
      <BasicButton className={styles['remove-button']} onClick={(e) => { e.stopPropagation(); onRemove(file) }} data-testid="removeButton">
        <SVGIcon strokeWidth="10" className={styles['remove-icon']} icon="close"/>
      </BasicButton>
      <SVGIcon className={styles['file-icon']} icon="document-approved"/>
      <p>{file.name}</p>
    </li>
  );
};

FileListItem.propTypes = propTypes;
FileListItem.defaultProps = defaultProps;

export { FileListItem };