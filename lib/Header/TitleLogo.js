var _templateObject = _taggedTemplateLiteral(['\n  height: ', 'px;\n  padding: ', 'px;\n'], ['\n  height: ', 'px;\n  padding: ', 'px;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from './_caGovLogo.svg';
import theme from '../theme';

var Image = styled.img(_templateObject, theme.size.titleBar, theme.size.xs);

/** Renders the title bars logo  */
function TitleLogo(_ref) {
  var onClick = _ref.onClick;

  return React.createElement(
    'a',
    { href: 'http://www.ca.gov', onClick: onClick },
    React.createElement(Image, { src: logo, alt: 'CA Gov Logo' })
  );
}

TitleLogo.propTypes = {
  onClick: PropTypes.func
};

export default TitleLogo;