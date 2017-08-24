var _templateObject = _taggedTemplateLiteral(['\n    text-align: ', ';\n    flex: 1;\n    list-style-type: none;\n\n    &:not(:last-child) {\n      border-bottom: ', ';\n    }\n'], ['\n    text-align: ', ';\n    flex: 1;\n    list-style-type: none;\n\n    &:not(:last-child) {\n      border-bottom: ', ';\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: ', ';\n    vertical-align: ', ';\n    color: ', ';\n    padding-right: ', ';\n'], ['\n    display: ', ';\n    vertical-align: ', ';\n    color: ', ';\n    padding-right: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    display: block;\n    color: inherit;\n    padding: ', 'px ', 'px;\n\n    &:hover,\n    &:focus,\n    &.active,\n    &:hover > ', ',\n    &:focus > ', ',\n    &.active > ', ' {\n      text-decoration: none;\n      color: ', ';\n    }\n'], ['\n    display: block;\n    color: inherit;\n    padding: ', 'px ', 'px;\n\n    &:hover,\n    &:focus,\n    &.active,\n    &:hover > ', ',\n    &:focus > ', ',\n    &.active > ', ' {\n      text-decoration: none;\n      color: ', ';\n    }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../Icon';
import theme from '../util/theme';

var Wrapper = styled.li(_templateObject, function (props) {
  return props.isMobile ? 'left' : 'center';
}, function (props) {
  return props.isMobile ? '1px solid ' + theme.color.theme.tertiary : 'none';
});

var StyledIcon = styled(Icon)(_templateObject2, function (props) {
  return props.isMobile ? 'inline-block' : 'block';
}, function (props) {
  return props.isMobile ? 'middle' : 'baseline';
}, theme.color.theme.tertiary, function (props) {
  return props.isMobile ? '10px' : '0';
});

var StyledLink = styled(Link)(_templateObject3, theme.size.sm, theme.size.xl, StyledIcon, StyledIcon, StyledIcon, theme.color.theme.primary);

/** Renders a single navbar link */
function NavLink(_ref) {
  var link = _ref.link,
      isMobile = _ref.isMobile,
      onClick = _ref.onClick;

  return React.createElement(
    Wrapper,
    { isMobile: isMobile },
    React.createElement(
      StyledLink,
      {
        exact: link.href === '/',
        to: link.href,
        onClick: onClick
      },
      React.createElement(StyledIcon, {
        icon: link.icon,
        size: 32,
        isMobile: isMobile
      }),
      link.text
    )
  );
}

NavLink.PropTypes = {
  link: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }).isRequired,
  isMobile: PropTypes.bool,
  onClick: PropTypes.func
};

export default NavLink;