import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

/** Renders an icon */
function Icon({
    icon,
    className,
    ...props,
}) {
    return <span className={`ca-gov-icon-${icon} ${className}`} {...props}/>;
}

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Icon;
