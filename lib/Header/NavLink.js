var _templateObject = _taggedTemplateLiteral(['\n    &:not(:last-child) {\n      border-bottom: ', ';\n    }\n'], ['\n    &:not(:last-child) {\n      border-bottom: ', ';\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: ', ';\n    vertical-align: ', ';\n    color: ', ';\n    padding-right: ', '\n'], ['\n    display: ', ';\n    vertical-align: ', ';\n    color: ', ';\n    padding-right: ', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    display: block;\n    color: inherit;\n    text-align: ', ';\n    padding: ', 'px;\n\n    &:hover,\n    &:focus,\n    &:hover > ', ',\n    &:focus > ', ' {\n      text-decoration: none;\n      color: ', ';\n    }\n'], ['\n    display: block;\n    color: inherit;\n    text-align: ', ';\n    padding: ', 'px;\n\n    &:hover,\n    &:focus,\n    &:hover > ', ',\n    &:focus > ', ' {\n      text-decoration: none;\n      color: ', ';\n    }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../Icon';
import theme from '../theme';

var Wrapper = styled.li(_templateObject, function (props) {
  return props.isMobile ? '1px solid ' + theme.color.faded : 'none';
});

var StyledIcon = styled(Icon)(_templateObject2, function (props) {
  return props.isMobile ? 'inline-block' : 'block';
}, function (props) {
  return props.isMobile ? 'middle' : 'baseline';
}, theme.color.faded, function (props) {
  return props.isMobile ? '10px' : '0';
});

var Link = styled.a(_templateObject3, function (props) {
  return props.isMobile ? 'left' : 'center';
}, theme.size.sm, StyledIcon, StyledIcon, theme.color.primary);

/** Renders a single navbar link */
function NavLink(_ref) {
  var link = _ref.link,
      isMobile = _ref.isMobile,
      mobileNavVisible = _ref.mobileNavVisible,
      onClick = _ref.onClick;

  return React.createElement(
    Wrapper,
    { isMobile: isMobile },
    React.createElement(
      Link,
      {
        href: link.href,
        onClick: onClick,
        isMobile: isMobile
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
  mobileNavVisible: PropTypes.bool,
  onClick: PropTypes.func
};

export default NavLink;