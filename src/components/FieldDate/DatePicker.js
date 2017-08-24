import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pikaday from 'pikaday';
import styled from 'styled-components';
import './datePicker.css';

const HiddenField = styled.input`
  // display: none;
`;

class DatePicker extends Component {
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
    console.log('SELECTING: ', date)
    const { picker } = this.refs;
    const { onChange } = this.props;
    const newDate = new Date(date).toISOString();
    // update redux-form]
    onChange(newDate);
    // update display field
    this.setState({ displayText: newDate.slice(0, 10) });
  }

  render() {
    const { name, minDate, disabled, ...props } = this.props;
    const { displayText } = this.state;
// console.log(this.state);
    return (
      <div className={'fieldDate'}>
        {/* field that will be displayed */}
        <input
          ref={'display'}
          className={'form-control'}
          disabled={disabled}
          value={displayText}
        />
        {!disabled && <span className={'ca-gov-icon-calendar form-control-feedback'} />}

        {/* date picker */}
        <HiddenField ref={'picker'}  />

        {/* handle dispatching to redux-form */}
        <HiddenField id={name} />
      </div>
    );
  }
}

export default DatePicker;
