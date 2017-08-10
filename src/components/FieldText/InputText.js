import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';

import Label from '../Label';
import theme from '../theme';

// TODO: fix disabled background (still use bootstrap...)
const Input = styled(FormControl)`
  text-overflow: ellipsis;
  border-radius: 0;
  height: 36px;
  font-size: ${theme.font.md}px;
  background: ${props => props.disabled ? theme.color.darkGrey : 'inherit'};
`;

/** Generic text input */
function InputText({
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

  const invalidState = touched && error ? 'error' : null;
  const newPlaceholder = disabled ? '' : placeholder || `Enter ${label}`;

  const newOnBlur = (event, newValue, previousValue) => {
    if (onBlur) {
      onBlur(event, newValue, previousValue);
    }
    input.onBlur(event, newValue, previousValue);
  }

  const newOnFocus = (event) => {
    if (onFocus) {
      onFocus(event);
    }
    input.onFocus(event);
  }

  const newOnChange = (event, newValue, previousValue) => {
    if (onChange) {
      onChange(event, newValue, previousValue);
    }
    input.onChange(event, newValue, previousValue);
  }

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
    onBlur: newOnBlur,
    onFocus: newOnFocus,
    onChange: newOnChange,
    disabled,
    autoComplete,
    componentClass,
    placeholder: newPlaceholder,
  };

  return (
    <FormGroup controlId={name} validationState={invalidState}>
      <Label {...labelProps} />
      <Input {...inputProps} />
      {invalidState && <HelpBlock>{error}</HelpBlock>}
    </FormGroup>
  );
}

// TODO: add proptypes
InputText.propTypes = {
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

export default InputText;
