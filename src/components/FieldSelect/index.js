import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import theme from '../util/theme';
import { mapOnBlur, mapOnFocus, mapOnChange } from '../util/reduxForm';

import Label from '../Label';

// TODO: fix disabled background (still use bootstrap...)
const Input = styled(FormControl) `
  text-overflow: ellipsis;
  border-radius: 0;
  height: 36px;
  font-size: ${theme.font.md}px;
  background: ${props => props.disabled ? theme.color.darkGrey : 'inherit'};
  cursor: pointer;
`;

/** Generic text input */
function FieldSelect({
  meta,
  input,
  label,
  onBlur,
  onFocus,
  onChange,
  options,
  hideBlank,
  icon = true,
  tooltip = '',
  type = 'text',
  required = false,
  disabled = false,
  placeholder = '',
  autoComplete = 'off',
  componentClass = 'select',
}) {
  const { name } = input;
  const { touched, error } = meta;

  const invalidState = touched && error ? 'error' : null;
  const newPlaceholder = disabled ? '' : placeholder || `Enter ${label}`;

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
    disabled,
    autoComplete,
    componentClass,
    onBlur: mapOnBlur(onBlur, input),
    onFocus: mapOnFocus(onFocus, input),
    onChange: mapOnChange(onChange, input),
    placeholder: newPlaceholder,
  };

  return (
    <FormGroup controlId={name} validationState={invalidState}>
      <Label {...labelProps} />
      <Input {...inputProps}>
        {!hideBlank && <option />}
        {
          options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))
        }
      </Input>
      {invalidState && <HelpBlock>{error}</HelpBlock>}
    </FormGroup>
  );
}

// TODO: add proptypes
FieldSelect.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
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

export default FieldSelect;
