import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import theme from '../util/theme';
import { newOnBlur, newOnFocus, newOnChange } from '../util/reduxForm';

import Label from '../Label';

// TODO: fix disabled background (still use bootstrap...)
const Input = styled(FormControl)`
  text-overflow: ellipsis;
  border-radius: 0;
  height: 36px;
  font-size: ${theme.font.md}px;
  background: ${props => props.disabled ? theme.color.darkGrey : 'inherit'};
`;

/** Generic text input */
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
    onBlur: newOnBlur(onBlur, input),
    onFocus: newOnFocus(onFocus, input),
    onChange: newOnChange(onChange, input),
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
