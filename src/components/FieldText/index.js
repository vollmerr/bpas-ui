import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FormGroup from 'react-bootstrap/lib/FormGroup';

import { mapOnBlur, mapOnFocus, mapOnChange } from '../util/reduxForm';
import Input from '../Field/Input';
import Error from '../Field/Error';
import Label from '../Label';

/**
 * TODO COMMENTS
 * FUTURE: consolidate all Field components, not very DRY....
 * @param {*} param0
 */
function FieldText({
  meta,
  input,
  label,
  onBlur,
  onFocus,
  onChange,
  icon = true,
  tooltip = '',
  type = 'text',
  required = false,
  disabled = false,
  placeholder = '',
  autoComplete = 'off',
  componentClass = 'input',
}) {
  const { name } = input;
  const { touched, error } = meta;

  const state = touched && error ? 'error' : null;
  const newPlaceholder = disabled ? '' : placeholder || `Enter ${label}`;

  const groupProps = {
    controlId: name,
    validationState: state,
  };

  const labelProps = {
    name,
    icon,
    label,
    tooltip,
    required,
    disabled,
  };

  const inputProps = {
    ...input,
    type,
    onBlur: mapOnBlur(onBlur, input),
    onFocus: mapOnFocus(onFocus, input),
    onChange: mapOnChange(onChange, input),
    disabled,
    autoComplete,
    componentClass,
    placeholder: newPlaceholder,
  };

  const errorProps = {
    error,
    state,
  };

  return (
    <FormGroup {...groupProps}>
      <Label {...labelProps} />
      <Input {...inputProps} />
      <Error {...errorProps} />
    </FormGroup>
  );
}

// TODO PROPTYPES
FieldText.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    validation: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default FieldText;
