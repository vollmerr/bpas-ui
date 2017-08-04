import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ControlLabel from 'react-bootstrap/lib/ControlLabel';

import Tooltip from '../Tooltip';
import theme from '../theme';

const StyledLabel = styled.label`
  ${props => props.required &&
    `&:after {
      content: " *";
      color: ${theme.color.alert};
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
    <ControlLabel htmlFor={name}>
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