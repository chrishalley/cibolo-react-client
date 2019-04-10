import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { FileListItem } from './FileListItem/FileListItem';
import styles from './FileList.module.css';

const propTypes = {
  files: PropTypes.array
};

const defaultProps = {
  files: []
};

const FileList = props => {

  
  const { files, onRemove, style } = props;
  
  useEffect(() => {
    console.log('fileList files changed', files)
  }, [files])
  
  return (
    <ul data-testid="fileList" className={styles['file-list']} style={style}>
      {files.map((file, i) => {
        return <FileListItem onRemove={onRemove} key={i} file={file}/>
      })}
    </ul>
  );
};

FileList.propTypes = propTypes;
FileList.defaultProps = defaultProps;

export { FileList };