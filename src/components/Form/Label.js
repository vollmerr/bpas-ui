import React from 'react';
import PropTypes from 'prop-types';

import ControlLabel from 'react-bootstrap/lib/ControlLabel';

import LabelTooltip from './LabelTooltip';

/** Displays fields label */
function Label({
  name,
  label,
  tooltip,
  icon,
}) {
  const toolTipProps = {
    icon,
    tooltip,
    label,
    id: name,
  };

  return(
    <ControlLabel htmlFor={name}>
      <LabelTooltip {...toolTipProps} />
    </ControlLabel>
  );
}

Label.propTypes = {
  error: PropTypes.string,
};

export default Label;
