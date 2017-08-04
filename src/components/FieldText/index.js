import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import { isEmptyText } from '../validate';
import InputText from './InputText';


// meta,
// input,
// label,
//   onBlur,
//   onFocus,
//   onChange,
//   tooltip = '',
//   type = 'text',
//   required = false,
//   disabled = false,
//   placeholder = '',
//   autoComplete = 'off',
//   componentClass = 'text',


function FieldInput({
  name,
  required,
  disabled,
  validate,
  ...props,
}) {
  let isRequired = false;
  let toValidate = undefined;

  if (!disabled) {
    isRequired = required;

    if (!!validate && !!isRequired) {
      toValidate = [isEmptyText, ...validate];
    } else if (!!validate) {
      toValidate = [...validate];
    } else if (!!isRequired) {
      toValidate = isEmptyText;
    }
  }

  return (
    <Field
      name={name}
      disabled={disabled}
      required={isRequired}
      validate={toValidate}
      component={InputText}
      {...props}
    />
  );
};

FieldInput.propTypes = {
  // name: PropTypes.string.isRequired,
  // required: PropTypes.bool.isRequired,
  // validate: PropTypes.array.isRequired,
  // allDisabled: PropTypes.bool.isRequired,
  // fieldsDisabled: PropTypes.object.isRequired,
  // hideTooltip: PropTypes.bool.isRequired,
};

FieldInput.defaultProps = {
  // required: false,
  // validate: [],
  // allDisabled: false,
  // fieldsDisabled: {},
  // hideTooltip: false,
}

export default FieldInput;
