import React from 'react';
import PropTypes from 'prop-types';

import BsTooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';

import Icon from '../Icon';

/**
 * Renders a label with a toolip
 * tooltip displays over icon if icon set
 */
function LabelTooltip({
  icon,
  tooltip,
  label,
  id,
}) {
  const text = <BsTooltip id={id}>{tooltip}</BsTooltip>;

  let render;
  if (icon) {
    render = (
      <span>
        {label}
        <OverlayTrigger placement={"bottom"} overlay={text}>
          <Icon icon={'question-fill'} size={14} />
        </OverlayTrigger>
      </span>
    );
  } else {
    render = (
      <OverlayTrigger placement={"bottom"} overlay={text}>
        <span>{label}</span>
      </OverlayTrigger>
    )
  }

  return render;
}

LabelTooltip.propTypes = {
  icon: PropTypes.bool,
  tooltip: PropTypes.string,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default LabelTooltip;
