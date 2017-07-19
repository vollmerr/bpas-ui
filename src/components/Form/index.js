import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Col from 'react-bootstrap/lib/Col';


/** Form wrapper */
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        test1: {
          onChange: this.handleChange,
          onBlur: this.handleBlur,
          name: 'test1',
          label: 'Test 1 Label',
          value: '',
          disabled: false,
          required: false,
          placeholder: 'Test Placeholder',
          validation: [],
          error: '',
        },
        test2: {
          onChange: this.handleChange,
          onBlur: this.handleBlur,
          name: 'test2',
          label: 'Test 2 Label',
          value: '',
          disabled: false,
          required: false,
          placeholder: 'Test Placeholder 2',
          validation: [],
          error: '',
        },
      },
    };
  }

  handleChange = (event) => {
    console.log(this.state.fields)
    const { fields } = this.state;
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    const newFields = fields;
    fields[name].value = value;

    this.setState({
      fields: newFields,
    });
  }

  handleBlur = (event) => {
    console.log("handling blur.");
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.handleValidation()) {
      const { fields } = this.state;

      let values = [];
      Object.keys(fields).forEach((field) => {
        values[field] = fields[field].value;
      });

      console.log('handling submit!!!!!', values);
    }
  }

  handleValidation = () => {
    return true;
  }

  render() {
    const { fields } = this.state;

    const testStyle = {
      md: 12,
    };

    const testStyle2 = {
      md: 6,
    };

    const testStyle3 = {
      md: 6,
      mdOffset: 3,
    };

    return (
      <form onSubmit={this.handleSubmit}>

        {/*visible = true,
        type: component (checkbox, text, etc) = text,*/}
          <Fields fields={fields} width={testStyle} />
          <Fields fields={fields} width={testStyle2} />

        <Section fields={fields} width={testStyle2} container={testStyle3} />

        <button type={'submit'}>test</button>

      </form>
    );
  }
}


/** Wrapper for Fields */
function Section({
  container,
  ...props,
}) {
  return(
    <Col {...container}>
      <Fields {...props} />
    </Col>
  );
}



/** Renders a group of form fields */
function Fields({
  fields,
  width,
}) {
  return (
    <div>
      {Object.keys(fields).map((field, i) => (
          <Field key={i} field={fields[field]} width={width} />
      ))}
    </div>
  );
}



import FormGroup from 'react-bootstrap/lib/FormGroup';
/** Renders a single form field */
function Field({
  field,
  width,
}) {
  const {
    name,
    error,
    label,
    tooltip, // TODO
    validation, // TODO
    ...input,
  } = field;

  const isValid = error ? 'error' : null;

  return (
    <Col {...width}>
      <FormGroup controlId={name} validationState={isValid}>
        <Label name={name} label={label} />
        <br/>
        <Text name={name} field={input} />
        <Error error={error} />
      </FormGroup>
    </Col>
  );
}





import ControlLabel from 'react-bootstrap/lib/ControlLabel';
/** Displays fields label */
function Label({
  name,
  label,
}) {
  return(
    <ControlLabel htmlFor={name}>
      {label}
    </ControlLabel>
  );
}




import FormControl from 'react-bootstrap/lib/FormControl';
/** Generic text input */
function Text({
  name,
  field,
}) {
  return(
    <FormControl name={name} {...field} />
  );
}

// PROPTYPES
//   onChange,
//   onBlur,
//   name,
//   value,
//   disabled,
//   required,
//   placeholder,





import HelpBlock from 'react-bootstrap/lib/HelpBlock';
/** Displays fields the error message */
function Error({
  error,
}) {
  return (
    <HelpBlock>{error}</HelpBlock>
  );
}




Form.propTypes = {

};

export default Form;
