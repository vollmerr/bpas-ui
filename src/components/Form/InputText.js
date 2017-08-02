import React from 'react';
import PropTypes from 'prop-types';

import FormControl from 'react-bootstrap/lib/FormControl';

/** Generic text input */
function InputText({
  name,
  input,
}) {
  return(
    <FormControl name={name} {...input} />
  );
}

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  input: PropTypes.shape({
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
