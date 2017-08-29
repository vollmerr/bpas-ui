import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import FormGroup from 'react-bootstrap/lib/FormGroup';

import Error from '../Field/Error';
import Label from '../Label';

// import propTypes from './propTypes';
// TODO REMOVE
export const mapOnBlur = (onBlur, input) => (event, newValue, previousValue) => {
  if (onBlur) {
    onBlur(event, newValue, previousValue);
  }
  input.onBlur(event, newValue, previousValue);
};

export const mapOnFocus = (onFocus, input) => (event) => {
  if (onFocus) {
    onFocus(event);
  }
  input.onFocus(event);
};

export const mapOnChange = (onChange, input) => (event, newValue, previousValue) => {
  if (onChange) {
    onChange(event, newValue, previousValue);
  }
  input.onChange(event, newValue, previousValue);
};


export const mapHandler = (type, props) => (...event) => {
  const func = props[type];
  if (func) {
    func(...event);
  }
  props.input[type](...event);
};

export const mapHandlers = props => ({
  onBlur: mapHandler('onBlur', props),
  onFocus: mapHandler('onFocus', props),
  onChange: mapHandler('onChange', props),
});

export const fieldify = Input => (
  class extends Component {
    render() {
      const {
        meta,
        icon,
        input,
        label,
        onBlur,
        onFocus,
        onChange,
        tooltip,
        options,
        disabled,
        required,
        placeholder,
        ...rest
      } = this.props;

      const { touched, error } = meta;
      const { name } = input;

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
        options,
        disabled,
        placeholder: newPlaceholder,
        ...input,
        ...rest,
        ...mapHandlers(this.props),
      };
    console.log(this.props)
    console.log('input props: ', ...mapHandlers(this.props))

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
  }
);
