import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import { isEmptyDate } from '../util/validate';
import InputDate from './InputDate';


function FieldDate({
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
      toValidate = [isEmptyDate, ...validate];
    } else if (validate) {
      toValidate = [...validate];
    } else if (isRequired) {
      toValidate = isEmptyDate;
    }
  }

  return (
    <Field
      disabled={disabled}
      required={isRequired}
      validate={toValidate}
      component={InputDate}
      {...props}
    />
  );
};

FieldDate.propTypes = {
  // name: PropTypes.string.isRequired,
  // required: PropTypes.bool.isRequired,
  // validate: PropTypes.array.isRequired,
  // allDisabled: PropTypes.bool.isRequired,
  // fieldsDisabled: PropTypes.object.isRequired,
  // hideTooltip: PropTypes.bool.isRequired,
};

FieldDate.defaultProps = {
  // required: false,
  // validate: [],
  // allDisabled: false,
  // fieldsDisabled: {},
  // hideTooltip: false,
}

export default FieldDate;
