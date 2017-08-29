import React from 'react';
import PropTypes from 'prop-types';

const A = ({
  children,
  ...props
}) => (
  <a {...props}>{children}</a>
);

A.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
};

export default A;
