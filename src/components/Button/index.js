import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyled from './ButtonStyled';

const Button = ({
  text,
  type,
  ...props
}) => (
  <ButtonStyled {...props} type={type}>{text}</ButtonStyled>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
