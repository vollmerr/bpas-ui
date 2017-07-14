var _templateObject = _taggedTemplateLiteral(['\n  margin: ', ';\n  display: inline-block;\n  height: 60px;\n'], ['\n  margin: ', ';\n  display: inline-block;\n  height: 60px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  height: 60px;\n'], ['\n  height: 60px;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import styled from 'styled-components';
import logo from './_odiLogo.png';

var Wrapper = styled.a(_templateObject, function (props) {
  return props.isMobile ? '15px 0' : '0';
});

var Image = styled.img(_templateObject2);

/** Renders the navbar logo  */
function NavLogo(props) {
  return React.createElement(
    Wrapper,
    Object.assign({ href: '/' }, props),
    React.createElement(Image, { src: logo, alt: 'CA Department of Technology logo' })
  );
}

export default NavLogo;