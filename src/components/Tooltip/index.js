import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Popover from 'react-bootstrap/lib/Popover';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import theme from '../util/theme';

import Icon from '../Icon';

const StyledIcon = styled(Icon)`
  margin-left: 5px;
  cursor: pointer;
  color: ${theme.color.grey.tertiary};
  &:hover {
    color: ${theme.color.theme.primary};
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
  const text = <Popover id={id}>{tooltip}</Popover>;

  let render;
  if (icon) {
    render = (
      <div>
        {children}
        <OverlayTrigger placement={'bottom'} overlay={text}>
          <StyledIcon icon={'question-fill'} size={14} />
        </OverlayTrigger>
      </div>
    );
  } else {
    render = (
      <OverlayTrigger placement={'bottom'} overlay={text}>
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
