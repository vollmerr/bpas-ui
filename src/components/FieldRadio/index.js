import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { isEmptyText } from '../../util/validate';

import GroupRadio from './GroupRadio';

function FieldRadio({
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

    if (validate && isRequired) {
      toValidate = [isEmptyText, ...validate];
    } else if (validate) {
      toValidate = [...validate];
    } else if (isRequired) {
      toValidate = isEmptyText;
    }
  }

  return (
    <Field
      name={name}
      disabled={disabled}
      required={isRequired}
      validate={toValidate}
      component={GroupRadio}
      {...props}
    />
  );
};

FieldRadio.propTypes = {
  // name: PropTypes.string.isRequired,
  // required: PropTypes.bool.isRequired,
  // validate: PropTypes.array.isRequired,
  // allDisabled: PropTypes.bool.isRequired,
  // fieldsDisabled: PropTypes.object.isRequired,
  // hideTooltip: PropTypes.bool.isRequired,
};

FieldRadio.defaultProps = {
  // required: false,
  // validate: [],
  // allDisabled: false,
  // fieldsDisabled: {},
  // hideTooltip: false,
}

export default FieldRadio;
