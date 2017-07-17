var _templateObject = _taggedTemplateLiteral(['\n  min-height: ', 'px;\n  display: flex;\n  align-items: center;\n  background: ', ';\n'], ['\n  min-height: ', 'px;\n  display: flex;\n  align-items: center;\n  background: ', ';\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

import Container from '../Container';
import Links from './Links';

var Wrapper = styled.footer(_templateObject, theme.size.footer, theme.color.bold);

/** Renders the title bars logo  */
function Footer() {
  return React.createElement(
    Wrapper,
    null,
    React.createElement(
      Container,
      null,
      React.createElement(Links, null)
    )
  );
}

export default Footer;