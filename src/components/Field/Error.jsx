import React from 'react';
import PropTypes from 'prop-types';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';

/**
 * Error message for form inputs
 * @param {string} error  - message to display
 * @param {string} state  - state of input (error, warn, etc)
 * @return {JSX}
 */
const Error = ({ error, state }) => (
  state ? <HelpBlock>{error}</HelpBlock> : null
);

Error.propTypes = {
  error: PropTypes.string,
  state: PropTypes.string,
};

Error.defaultProps = {
  error: '',
  state: null,
};

export default Error;
