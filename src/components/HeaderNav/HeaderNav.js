import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../public/img/office-of-digital-innovation-logo.png';

import {
  Grid,
} from 'react-bootstrap';

import HeaderNavLinks from '../HeaderNavLinks';

import './style.css';

/** Renders the Utility Header */
function HeaderNav({
  links,
}) {
  return (
    <Grid>
      <HeaderNavLinks {...links} />
    </Grid>
  );
}

HeaderNav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      href: PropTypes.string,
      icon: PropTypes.string,
    }),
  ),
};

export default HeaderNav;
