var _templateObject = _taggedTemplateLiteral(['\n  color: #fff;\n  padding: ', 'px;\n\n  &:hover,\n  &:focus {\n    text-decoration: none;\n    color: ', ';\n  }\n'], ['\n  color: #fff;\n  padding: ', 'px;\n\n  &:hover,\n  &:focus {\n    text-decoration: none;\n    color: ', ';\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../theme';

var Links = styled(Link)(_templateObject, theme.size.xs, theme.color.second);

/** Renders the title bars links */
function TitleLinks(props) {
  return React.createElement(
    Links,
    Object.assign({ to: '/help' }, props),
    'Contact Us'
  );
}

export default TitleLinks;