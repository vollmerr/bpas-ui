var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n'], ['\n  display: inline-block;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin: ', ';\n  height: 60px;\n'], ['\n  margin: ', ';\n  height: 60px;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './odiLogo.png';

var Wrapper = styled(Link)(_templateObject);

var Image = styled.img(_templateObject2, function (props) {
  return props.isMobile ? '15px 0' : '0 15px 0 0';
});

/** Renders the navbar logo  */
function NavLogo(_ref) {
  var isMobile = _ref.isMobile,
      onClick = _ref.onClick;

  return React.createElement(
    Wrapper,
    { to: '/', onClick: onClick },
    React.createElement(Image, {
      src: logo,
      alt: 'CA Department of Technology logo',
      isMobile: isMobile
    })
  );
}

NavLogo.PropTypes = {
  onClick: PropTypes.func
};

export default NavLogo;