import React from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxField } from 'redux-form';

import { isEmptyText } from '../util/validate';

/**
 * Wraps inputs with redux-form's Field component, while
 * disabling validating if needed and passing custom validation.
 * @param {bool} required   - determines if the field is required
 * @param {bool} disabled   - determines if the field is disabled
 * @param {array} validate  - contains validation functions
 * @return {JSX}
 */
const Field = ({
  required,
  disabled,
  validate,
  ...props
}) => {
  let isRequired = false;
  let toValidate;

  // only require and validate if not disabled
  if (!disabled) {
    isRequired = required;

    if (validate && isRequired) {
      toValidate = [isEmptyText, ...validate];
    } else if (validate) {
      toValidate = [...validate];
    } else if (isRequired) {
      toValidate = isEmptyText;
    }
  }

  return (
    <ReduxField
      disabled={disabled}
      required={isRequired}
      validate={toValidate}
      {...props}
    />
  );
};

Field.propTypes = {
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  validate: PropTypes.arrayOf(PropTypes.func),
};

Field.defaultProps = {
  required: false,
  disabled: false,
  validate: [],
};

export default Field;
