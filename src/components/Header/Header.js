import React from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
} from 'react-bootstrap';

import { HeaderUtility, HeaderNav } from 'bpas-ui';

// import './style.css';

/** Renders the Utility Header */
function Header({
  title,
  links,
}) {
  return (
    <header>
      <HeaderUtility title={title} />
      <HeaderNav links={links} />
    </header>
  );
}

Header.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      href: PropTypes.string,
      icon: PropTypes.string,
    }),
  ),
};

export default Header;
