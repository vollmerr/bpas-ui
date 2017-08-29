import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  text,
  type,
  ...props
}) => (
  <button {...props} type={type}>{text}</button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
