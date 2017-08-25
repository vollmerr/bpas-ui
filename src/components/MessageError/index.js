import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Button from 'react-bootstrap/lib/Button';
import theme from '../util/theme';

const Message = styled.div`
  text-align: center;
`;

/**
 * Displays a a error message
 * @param {string} error      - error message to display under generic one
 * @param {func} onClick      - handler for button click
 * @param {string} buttonText - text for button
 */
function MessageError({
  error = '',
  onClick = null,
  buttonText = 'Home',
}) {
  return (
    <Message>
      <h2>Sorry, something went wrong!</h2>
      {error && <p>{error}</p>}
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
