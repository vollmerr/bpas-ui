import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const A = ({
  href,
  children,
  ...props
}) => (
  href.match('http') ?
    <a href={href} {...props}>{children}</a> :
    <Link to={href} {...props} >{children}</Link>
);

A.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
};

export default A;
