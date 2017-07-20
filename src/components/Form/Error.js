import React from 'react';
import PropTypes from 'prop-types';

import HelpBlock from 'react-bootstrap/lib/HelpBlock';

/** Displays fields the error message */
function Error({
  error,
}) {
  return (
    <HelpBlock>{error}</HelpBlock>
  );
}

Error.propTypes = {
  error: PropTypes.string,
};

export default Error;
