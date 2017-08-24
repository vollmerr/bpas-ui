import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Button from 'react-bootstrap/lib/Button';
import theme from '../util/theme';

const Message = styled.div`
  text-align: center;
`;

/**
 *  Displays a a error message
 */
function MessageError({
  error = '',
  onClick = '',
  buttonText = 'Home',
}) {
  return (
    <Message>
      <h2>Sorry, something went wrong!</h2>
      <p>{error}</p>
      {onClick && <Button onClick={onClick}>{buttonText}</Button>}
    </Message>
  );
}

MessageError.propTypes = {
  error: PropTypes.string,
  onClick: PropTypes.func,
  buttonText: PropTypes.string,
};

export default MessageError;
