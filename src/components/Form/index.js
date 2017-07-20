import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FieldSection from './FieldSection';

/** Form wrapper */
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: props.fields,
    };

    this.bindHandlers(this.state.fields);
  }


  /**
   * Binds form handlers to inputs
   * If custom handler is present that is called first
   */
  bindHandlers = (fields) => {
    Object.keys(fields).forEach((field) => {
      fields[field].onBlur = (event) => {
        this.handleBlur(event);
      };
      fields[field].onChange = (event) => {
        this.handleChange(event);
      };
    });
  }


  /**
   * Handles changing a field in form
   * validates field, updates value in state
   */
  handleChange = (event) => {
    event.preventDefault();
    const { fields } = this.state;
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    const newFields = { ...fields };
    fields[name].value = value;

    this.handleValidation();

    this.setState({
      fields: newFields,
    });
  }


  /**
   * Handles blurring a field in form
   * @param {object} event  - blur event
   */
  handleBlur = (event) => {
    event.preventDefault();
    console.log("handling blur.");
  }


  /**
   * Handles submitting the form
   * Validates all fields before submission.
   * @param {object} event  - submission event
   */
  handleSubmit = (event) => {
    console.log("in handle submit...")
    event.preventDefault();
    const { fields } = this.state;
    const { onSubmit, validate } = this.props;

    let noError = true;
    let values = [];

    // check for errors and build object of just values
    if (validate) {
      Object.keys(fields).forEach((field) => {
        if (this.handleValidation(fields[field])) {
          noError = false;
        }

        if (fields[field].visible) {
          values[field] = fields[field].value;
        }
      });
    }

    if (noError) {
      console.log('submitting.')
      onSubmit(values);
    } else {
      console.log('submit failed.', values);
    }
  }


  /**
   * Handles form validation
   * @return    error ? true : false
   */
  handleValidation = () => {
    const { fields } = this.state;
    const { validate, isWizard } = this.props;
    const newFields = { ...fields };
    let hasError = false;
    let fieldError = false;

    if (!validate) {
      return false;
    }

    // check all non disabled fields for errors
    Object.keys(fields).forEach((field) => {
      const { disabled, validation, value, visible } = fields[field];
      fieldError = false;

      if (
        !disabled &&
        validation &&
        visible
      ) {
        validation.forEach((type) => {
          const message = validate({type, value, fields});

          if (message) {
            newFields[field].error = message;
            fieldError = true;
            hasError = true;
          }
        });

        if (!fieldError) {
          newFields[field].error = '';
        }

      }
    });

    this.setState({
      fields: newFields,
    });

    return hasError;
  }


  render() {
    const { fields } = this.state;
    const { buttons } = this.props;

    const testStyle2 = {
      md: 6,
    };

    const testStyle3 = {
      md: 6,
      mdOffset: 3,
    };

    return (
      <form onSubmit={e => e.preventDefault}>

        <FieldSection fields={fields} width={testStyle2} container={testStyle3} />

        <Buttons buttons={buttons} onSubmit={this.handleSubmit} />

      </form>
    );
  }
}


function Buttons({
  onSubmit,
  buttons = [],
}) {
  return (
    <div>
      {buttons.map((button, i) => {
        const {
          text,
          type,
          onClick,
          isSubmit,
          visible,
        } = button;

        const click = isSubmit ? onSubmit : onClick;

        if (visible) {
          return (
            <button key={i} type={type || 'button'} onClick={click}>{text || 'Submit'}</button>
          );
        }
        return null;
      })}
    </div>
  );
}


Form.propTypes = {
  validate: PropTypes.func,
  onSubmit: PropTypes.func,
  buttons: PropTypes.arrayOf(PropTypes.object),
};

export default Form;
