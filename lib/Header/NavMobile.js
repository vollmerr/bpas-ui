var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n  cursor: pointer;\n  float: right;\n  margin-top: 1.2em;\n\n  &:hover {\n    text-decoration: none;\n  }\n'], ['\n  color: ', ';\n  cursor: pointer;\n  float: right;\n  margin-top: 1.2em;\n\n  &:hover {\n    text-decoration: none;\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../util/theme';
import Icon from '../Icon';

var Menu = styled.a(_templateObject, theme.color.theme.primary);

/** Renders the navbar logo  */
function NavMobile(_ref) {
  var onClick = _ref.onClick;

  return React.createElement(
    Menu,
    { onClick: onClick },
    React.createElement(Icon, { icon: 'menu', size: 36 })
  );
}

NavMobile.PropTypes = {
  onClick: PropTypes.func.isRequired
};

export default NavMobile;