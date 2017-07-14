import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../public/img/Ca-Gov-Logo-Gold.svg';

import {
    Image,
    Nav,
    Navbar,
    NavItem,
} from 'react-bootstrap';

import './style.css';

/** Renders the Utility Header */
function HeaderUtility({
  title,
}) {
  return (
    <Navbar className={'header-utility'}>

      <Navbar.Header>
        <Navbar.Brand className={'header-utility__brand'}>
          <a href="http://www.ca.gov">
            <Image src={logo} className={'header-utility__logo'}/>
          </a>
        </Navbar.Brand>
      </Navbar.Header>

      <Navbar.Collapse>
        <Nav>
          <NavItem className={'header-utility__title'}>{title}</NavItem>
        </Nav>
        
        <Nav pullRight>
          <NavItem className={'header-utility__link'}>Contact Us</NavItem>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
}

HeaderUtility.propTypes = {
  /** title to pass to UtilityLogo */
  title: PropTypes.string.isRequired,
};

export default HeaderUtility;
