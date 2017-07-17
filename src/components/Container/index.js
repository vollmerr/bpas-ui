import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'react-bootstrap/lib/Grid';

function Container({
  children,
  ...props,
}){
  return <Grid {...props}>{children}</Grid>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
