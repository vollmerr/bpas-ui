import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import theme from '../../util/theme';

import Tooltip from '../Tooltip';

const StyledLabel = styled.span`
  ${props => props.required &&
    `&:after {
      content: " *";
      color: ${theme.color.accent.red};
    }`
  }
`;

/**
 *  Displays a label
 *  Indicates if required and adds a tooltip if passed
 */
function Label({
  name,
  label,
  tooltip = null,
  icon = true,
  required = false,
  disabled = false,
  ...props,
}) {
  const labelProps = {
    required: required && !disabled,
    disabled,
  };

  const toolTipProps = {
    icon,
    tooltip,
    id: name,
  };

  const styledLabel = <StyledLabel {...labelProps}>{label}</StyledLabel>;
  const tooltipLabel = tooltip ? <Tooltip {...toolTipProps}>{styledLabel}</Tooltip> : styledLabel;

  return (
    <ControlLabel htmlFor={name} {...props}>
      {tooltipLabel}
    </ControlLabel>
  );
}

Label.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  tooltip: PropTypes.string,
  icon: PropTypes.bool,
  required: PropTypes.bool,
};

export default Label;
