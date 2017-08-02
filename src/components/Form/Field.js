import React from 'react';
import PropTypes from 'prop-types';

import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';

import Label from './Label';
import InputText from './InputText';
import Error from './Error';

/** Renders a single form field */
function Field({
  field,
  width,
}) {
  const {
    name,
    error,
    label,
    tooltip,
    icon,
    validation,
    ...input,
  } = field;

  const fieldProps = {
    controlId: name,
    validationState: error ? 'error' : null,
  };

  const labelProps = {
    name,
    label,
    tooltip,
    icon,
  };

  const inputProps = {
    name,
    input,
  };

  const errorProps = {
    error,
  };

  return (
    <Col {...width}>
      <FormGroup {...fieldProps}>
        <Label {...labelProps} />
        <InputText {...inputProps} />
        <Error {...errorProps} />
      </FormGroup>
    </Col>
  );
}

Field.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    error: PropTypes.string,
    label: PropTypes.string,
    tooltip: PropTypes.string,
    icon: PropTypes.bool,
  }).isRequired,
  width: PropTypes.objectOf(PropTypes.number),
};

export default Field;
