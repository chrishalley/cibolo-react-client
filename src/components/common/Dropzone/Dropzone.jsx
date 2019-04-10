import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { FileList } from '../';

import styles from './Dropzone.module.css';

const propTypes = {
  onDrop: PropTypes.func,
  files: PropTypes.array,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  maxFiles: PropTypes.string,
  showList: PropTypes.bool,
  onChange: PropTypes.func
};

const defaultProps = {
  onDrop: () => console.warn('No onDrop callback set'),
  files: [],
  disabled: false,
  multiple: false,
  showList: true,
  onChange: () => console.warn('No onChange callback set')
};


const Dropzone = (props) => {
  const { maxFiles, showList, onChange } = props;

  const [files, setFiles] = useState(props.files);
  const [highlight, setHighlight] = useState(false);
  const [disabled, setDisabled] = useState(props.disabled)

  useEffect(() => {
    if (files.length >= maxFiles) {
      return setDisabled(true);
    }
    files.length > 0 && onChange(files);
  }, [files]);

  const fileInputRef = useRef(null);

  const openFileDialog = (e) => {
    e.stopPropagation();
    if (disabled) return;
    fileInputRef.current.click();
  };

  const onFilesAdded = (e) => {
    if (disabled && files < parseInt(maxFiles)) return;
    const addedFiles = e.target.files;
    if (props.onFilesAdded) {
      const array = fileListToArray(addedFiles);
      props.onFilesAdded(array);
    }
  }

  const fileListToArray = function(list) {
    const array = [];
    for (var i = 0; i < list.length; i++) {
      array.push(list.item(i));
    }
    return array;
  };

  const onDragOver = (e) => {
    e.preventDefault();
    if (disabled) return;
    setHighlight(true);
  };
  
  const onDragLeave = () => {
    setHighlight(false);
  };
  
  const onDropHandler = (e) => {
    e.preventDefault();
    if (disabled) return;
    addFile(e.dataTransfer.files[0])
    setHighlight(false)
  };

  const addFile = (file) => {
    setFiles([...files, file]);
  }

  const removeFile = (remFile) => {
    setFiles([...files.filter(file => file.name !== remFile.name)]);
  }

  // const renderFile = (file, i) => {
  //   return (
  //     <li data-testid="fileListItem" className={styles['file-list-item']} key={i}>
  //       <BasicButton className={styles['remove-button']} onClick={() => removeFile(file)}>
  //         <SVGIcon strokeWidth="20" style={{ width: "1rem", height: "1rem" }} icon="close" />
  //       </BasicButton>
  //       <SVGIcon style={{ width: "4rem", height: "4rem" }} icon="document-approved" />
  //       <p>{file.name}</p>
  //     </li>
  //   )
  // }

  // const renderFiles = () => {
  //   if (files.length > 0) {
  //     return (
  //       <ul className={styles['file-list']}>
  //         {files.map((file, i) => {
  //           return renderFile(file, i);
  //         })}
  //       </ul>
  //     );
  //   }
  // }

  return (
    <div data-testid="dropzone-wrapper" className={styles['dropzone-wrapper']}>
      <div
        data-testid="dropzone-area"
        className={[styles['dropzone-area'], highlight ? styles['highlight-outline'] : ""].join(' ')}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDropHandler}
        onClick={(e) => openFileDialog(e)}
        style={{ cursor: disabled ? "default" : "pointer" }}
      >
      <div className={[styles['dropzone-core'], highlight ? styles['highlight'] : ""].join(' ')}>
        <span className={styles['instructions']}>{ !disabled ? `Drag file or click to add` : `Maximum number of files added` }</span>
      </div>
        
      </div>
      {/* <FileInput /> */}
      <input
        type="file"
        ref={fileInputRef}
        className={styles['file-input']}
        multiple
        onChange={(e) => addFile(e.target.files[0])}
      />
      {files.length > 0 && showList && <FileList files={files}/>}
    </div>
    
  );
};

Dropzone.propTypes = propTypes;
Dropzone.defaultProps = defaultProps;

export { Dropzone };