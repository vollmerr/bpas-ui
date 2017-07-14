var _templateObject = _taggedTemplateLiteral(['\n  position: fixed;\n  min-width: 100%;\n  background: ', ';\n  border-bottom: 5px solid ', ';\n'], ['\n  position: fixed;\n  min-width: 100%;\n  background: ', ';\n  border-bottom: 5px solid ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  align-items: center;\n  display: ', ';\n  justify-content: space-between;\n  min-height: ', 'px;\n'], ['\n  align-items: center;\n  display: ', ';\n  justify-content: space-between;\n  min-height: ', 'px;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-bootstrap';
import styled from 'styled-components';
import theme from '../theme';

import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import NavMobile from './NavMobile';

var Wrapper = styled.div(_templateObject, theme.color.primaryInverse, theme.color.second);

var Content = styled.div(_templateObject2, function (props) {
  return props.isMobile ? 'block' : 'flex';
}, theme.size.navBar);

/** Renders the headers title bar */
function NavBar(_ref) {
  var links = _ref.links,
      _ref$isMobile = _ref.isMobile,
      isMobile = _ref$isMobile === undefined ? false : _ref$isMobile,
      _ref$mobileNavVisible = _ref.mobileNavVisible,
      mobileNavVisible = _ref$mobileNavVisible === undefined ? false : _ref$mobileNavVisible,
      onClick = _ref.onClick;

  var navLogoProps = {
    isMobile: isMobile,
    onClick: onClick
  };

  var navMobileProps = {
    onClick: onClick
  };

  var navLinksProps = {
    links: links,
    isMobile: isMobile,
    onClick: onClick
  };

  var displayLinks = mobileNavVisible || !isMobile;

  return React.createElement(
    Wrapper,
    null,
    React.createElement(
      Grid,
      null,
      React.createElement(
        Content,
        { isMobile: isMobile },
        React.createElement(NavLogo, navLogoProps),
        isMobile && React.createElement(NavMobile, navMobileProps),
        displayLinks && React.createElement(NavLinks, navLinksProps)
      )
    )
  );
}

NavBar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.string
  })),
  isMobile: PropTypes.bool,
  mobileNavVisible: PropTypes.bool,
  onClick: PropTypes.func
};

export default NavBar;