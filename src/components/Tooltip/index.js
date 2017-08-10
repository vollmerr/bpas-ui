import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BsTooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';

import Icon from '../Icon';
import theme from '../theme';

const StyledIcon = styled(Icon)`
  margin-left: 5px;
  cursor: pointer;
  color: ${theme.color.boldFaded};
  &:hover {
    color: ${theme.color.primary};
  }
`;

/**
 * Renders its children with a toolip
 * tooltip displays over icon if icon set
 */
function Tooltip({
  id,
  tooltip,
  children,
  icon = true,
}) {
  const text = <BsTooltip id={id}>{tooltip}</BsTooltip>;

  let render;
  if (icon) {
    render = (
      <div>
        {children}
        <OverlayTrigger placement={"bottom"} overlay={text}>
          <StyledIcon icon={'question-fill'} size={14} />
        </OverlayTrigger>
      </div>
    );
  } else {
    render = (
      <OverlayTrigger placement={"bottom"} overlay={text}>
        <span>{children}</span>
      </OverlayTrigger>
    );
  }

  return render;
}

Tooltip.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  tooltip: PropTypes.string,
  icon: PropTypes.bool,
};

export default Tooltip;
