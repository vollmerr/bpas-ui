import React from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxField } from 'redux-form';

import { isEmptyText } from '../util/validate';

/**
 * Higher Order Component for wrapping custom inputs with
 * redux-form's Field component, while disabling validating
 * if needed and passing custom validation.
 */
function Field({
  required,
  disabled,
  validate,
  ...props,
}) {
  let isRequired = false;
  let toValidate = undefined;

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

// TODO PROPS / DEFAULTS
Field.propTypes = {};

export default Field;
