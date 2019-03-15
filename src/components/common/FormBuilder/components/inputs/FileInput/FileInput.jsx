import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  accept: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
}

const defaultProps = {
  accept: '*',
  onChange: () => {},
}

const readFile = (file) => {
  const reader = new FileReader();
  const processedFile = reader.readAsDataURL(file);
  console.log('***PROCESSED FILE*** ', processedFile);
}

const onChangeHandler = ({path, value}) => {
  console.log(value);
  readFile(value);
}

const FileInput = ({ accept, name, onChange }) => {
  return (
    <input type="file" id={name} name={name} onChange={(e) => console.log('FUCKING FILES: ', e.target.files)}/>
  );
}

FileInput.propTypes = propTypes;
FileInput.defaultProps = defaultProps;

export { FileInput };