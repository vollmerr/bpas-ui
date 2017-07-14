import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './style.css';

const StyledIcon = styled.span`
  font-size: ${(props) => props.size}px;
`;

/** Renders an icon */
function Icon({
    icon,
    className,
    size = 20,
    ...props,
}) {
    return (<StyledIcon
      className={`ca-gov-icon-${icon} ${className}`}
      size={size}
      {...props}
    />);
}

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    className: PropTypes.string,
    size: PropTypes.number,
};

export default Icon;
