import React from 'react';
import PropTypes from 'prop-types';

import styles from './Checkbox.module.css';

const propTypes = {
  options: PropTypes.array.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

const defaultProps = {
  onChange: () => {}
};

const Checkbox = (props) => {
  const { options, onChange, value, name } = props;

  const renderCheckboxes = (options, value, name) => {
    return options.map(option => {
      const optionName = option.name;
      return (
        <div key = { optionName } >
          <label className={styles.label} htmlFor={optionName}>{optionName}</label>
          <input checked={value[name][optionName]} className={styles.input} onChange={() => onChange({ [optionName]: !value[name][optionName] })} type="checkbox" name={optionName} />
        </div>
      );
    });
  }

  return (
    <div>
      {renderCheckboxes(options, value, name)}
    </div>
  );
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export { Checkbox };