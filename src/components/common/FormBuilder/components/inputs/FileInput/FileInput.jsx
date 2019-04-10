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

const FileInput = ({ accept, name, onChange }) => {
  return (
    <input type="file" id={name} name={name} onChange={(e) => console.log('Files: ', e.target.files)}/>
  );
}

FileInput.propTypes = propTypes;
FileInput.defaultProps = defaultProps;

export { FileInput };