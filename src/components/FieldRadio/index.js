import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from 'react-bootstrap/lib/FormGroup';

import { mapOnBlur, mapOnFocus, mapOnChange } from '../util/reduxForm';
import * as propTypes from '../util/propTypes';
import Error from '../Field/Error';
import Label from '../Label';

import Radio from './Radio';

/**
 * TODO TESTS
 * Radio button input group
 * Expects to be wrapped in a redux-form Field
 * @param {object} meta         - provided by redux-form Field containing meta data
 * @param {object} input        - provided by redux-form Field containing input data/methods
 * @param {string} label        - label to display above readio button group
 * @param {array} options       - contain option objects with a value and label
 * @param {func} onBlur         - handles onBlur, called before redux-form's
 * @param {func} onFocus        - handles onFocus, called before redux-form's
 * @param {func} onChange       - handles onChange, called before redux-form's
 * @param {bool} icon           - determines if icon showed for tooltip
 * @param {string|node} tooltip - tooltip to display
 * @param {bool} required       - determines if required
 * @param {bool} disabled       - determines if disabled
 * @return {JSX}
 */
function FieldRadio({
  meta,
  input,
  label,
  options,
  onBlur,
  onFocus,
  onChange,
  icon = true,
  tooltip = '',
  required = false,
  disabled = false,
}) {
  const { name, value } = input;
  const { touched, error } = meta;

  const state = touched && error ? 'error' : null;

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

  const radiosProps = {
    onBlur: mapOnBlur(onBlur, input),
    onFocus: mapOnFocus(onFocus, input),
    onChange: mapOnChange(onChange, input),
  };

  const errorProps = {
    error,
    state,
  };

  return (
    <FormGroup {...groupProps}>
      {label && <Label {...labelProps} />}

      <FormGroup {...radiosProps}>
        {options.map(option => (
          <Radio
            key={option.value}
            name={name}
            value={value}
            option={option}
            disabled={disabled}
          />
        ))}
      </FormGroup>

      <Error {...errorProps} />
    </FormGroup>
  );
}

FieldRadio.propTypes = {
  meta: propTypes.meta,
  input: propTypes.input.isRequired,
  label: PropTypes.string,
  options: propTypes.options.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  icon: PropTypes.bool,
  tooltip: propTypes.tooltip,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default FieldRadio;
