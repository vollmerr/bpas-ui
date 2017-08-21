import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Radio from 'react-bootstrap/lib/Radio';

import theme from '../util/theme';
import { newOnBlur, newOnFocus, newOnChange } from '../util/reduxForm';

import Label from '../Label';


const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
`;

const getLabelStatus = ({ disabled = false, checked = false }) => {
  if (checked) {
    return `
      background: ${disabled ? theme.color.grey.tertiary : theme.color.theme.primary};
      border-color: ${disabled ? theme.color.grey.primary : theme.color.theme.secondary};
      content: 'N';
    `;
  }

  if (disabled) {
    return `
      background: ${theme.color.grey.light};
      border-color: ${theme.color.grey.tertiary};
    `;
  }

  return `
    background: ${theme.color.grey.lighter};
    border-color: ${theme.color.grey.tertiary};
  `;
};

const StyledLabel = styled(Label)`
  &:before {
    border-radius: 100%;
    border: 1px solid;
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    position: relative;
    margin-right: 1em;
    vertical-align: top;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    text-align: center;
    transition: all 250ms ease;
    color: ${theme.color.grey.white};
    font-family: 'CaGov';
    content: '';
    ${props => getLabelStatus(props)}
  }

  font-weight: 400;
  padding-left: 0;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

const InputRadio = ({ name, value, option, disabled }) => {
  const checked = value === option.value;
  const isDisabled = disabled || option.disabled;
  const id = `${name}_${option.value}`;

  const inputProps = {
    id,
    name,
    checked,
    type: 'radio',
    value: option.value,
    disabled: isDisabled,
  };

  const labelProps = {
    label: option.label,
    name: id,
    checked,
    disabled: isDisabled,
  };

  return (
    <div>
      <HiddenInput {...inputProps} />
      <StyledLabel {...labelProps} />
    </div>
  );
}


/** Generic text input */
function GroupRadio({
  meta,
  input,
  label,
  options,
  onBlur,
  onFocus,
  onChange,
  icon = true,
  tooltip = '',
  type = 'radio',
  required = false,
  disabled = false,
}) {
  const { name, value } = input;
  const { touched, error } = meta;

  const invalidState = touched && error ? 'error' : null;

  const labelProps = {
    name,
    icon,
    label,
    tooltip,
    required,
    disabled,
  };

  const groupProps = {
    ...input,
    type,
    onBlur: newOnBlur(onBlur, input),
    onFocus: newOnFocus(onFocus, input),
    onChange: newOnChange(onChange, input),
  };

  return (
    <FormGroup controlId={name} validationState={invalidState}>
      <Label {...labelProps} />

      <FormGroup {...groupProps}>
        {
          options.map(option => (
            <InputRadio key={option.value} name={name} value={value} option={option} disabled={disabled} />
          ))
        }
      </FormGroup>

      {invalidState && <HelpBlock>{error}</HelpBlock>}
    </FormGroup>
  );
}

// TODO: add proptypes
GroupRadio.propTypes = {
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

export default GroupRadio;
