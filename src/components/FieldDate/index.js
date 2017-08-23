import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Pikaday from 'pikaday';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import theme from '../util/theme';
import { newOnBlur, newOnFocus, newOnChange } from '../util/reduxForm';

import Label from '../Label';
import './datePicker.css';

class FieldDate extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      displayText: '',
    };
  }

  componentDidMount() {
    this.initPikaday();
  }

  initPikaday = () => {
    const { picker, display } = this.refs;
    const { value, minDate } = this.props;

    this.picker = new Pikaday({
      field: picker,
      onSelect: this.onSelect,
      minDate,
      yearRange: [new Date().getFullYear(), new Date().getFullYear() + 30],
      trigger: display
    });

    if (value) {
      this.picker.setDate(value);
    }
  }

  onSelect = (date) => {
    const { picker } = this.refs;
    const { input } = this.props;
    const newDate = new Date(date).toISOString();
    // update redux-form
    input.onChange(newDate);
    // update display field
    this.setState({ displayText: newDate.slice(0, 10) });
  }

  render() {
    const {
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
      minDate,
    } = this.props;


    // name, minDate, disabled, ...props } = this.props;
    const { displayText } = this.state;
    console.log(this.state);

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

    const datePickerProps = {
      ...input,
      type,
      disabled,
      autoComplete,
      onBlur: newOnBlur(onBlur, input),
      onFocus: newOnFocus(onFocus, input),
      onChange: newOnChange(onChange, input),
      placeholder: newPlaceholder,
    };

    return (
      <FormGroup controlId={name} validationState={invalidState} className={'has-feedback'}>
        <Label {...labelProps} />

        <input ref={'display'} value={displayText} />
        {invalidState && <HelpBlock>{'error'}</HelpBlock>}

        <input ref={'picker'} className={'hidden'} {...datePickerProps} />
        <input id={name} className={'hidden'} />
      </FormGroup>
    );
  }
}

export default FieldDate;
