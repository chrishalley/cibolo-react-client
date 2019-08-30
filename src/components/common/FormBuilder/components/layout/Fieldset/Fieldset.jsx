import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { set } from 'lodash';

import styles from './Fieldset.module.css';

const propTypes = {
  defaultValue: PropTypes.any,
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element
  ]).isRequired,
  context: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  validations: PropTypes.array
}

const Fieldset = React.memo((props) => {

  const { component, context, name, label, validations, ...restProps } = props;
  const dispatch = useContext(context);
  const Component = component;
  const [errorMessages, setErrorMessages] = useState([]);
  const [dirty, setDirty] = useState(false);

  const onChange = (input) => {
    const { valid, errorMessages } = validate(input);
    setErrorMessages(errorMessages);
    let update = {};
    set(update, name, { value: input, valid: valid });
    dispatch({ type: 'update', payload: update });
  };

  const validate = function(value) {
    if (validations && validations.length > 0) {
      return validations.reduce((acc, rule) => {
        const { method, methodOptions, validWhen, errorMessage } = rule;
        return method(value, methodOptions) !== validWhen ? { valid: false, errorMessages: acc.errorMessages.concat(errorMessage) } : acc;
      }, { valid: true, errorMessages: [] } );
    } else {
      return { valid: true, errorMessages: [] };
    }
  };

  const onBlur = () => {
    setDirty(true);
  }

  return (
    <div className={styles.fieldset} data-testid="fieldset">
      <label className={styles.label} htmlFor={name}>{label}</label>
      <Component name={name} onBlur={onBlur} onChange={onChange} {...restProps} />
      {dirty && errorMessages.length > 0 && <p className={styles.error} style={{ display: 'inline-block' }}>{errorMessages[0]}</p>}
      {/* <p>Dirty: {dirty ? 'true' : 'false'}</p> */}
    </div>
  );
});

Fieldset.propTypes = propTypes;

export { Fieldset };