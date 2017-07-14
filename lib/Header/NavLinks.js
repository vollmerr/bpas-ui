var _templateObject = _taggedTemplateLiteral(['\n  display: ', ';\n  justify-content: space-between;\n  list-style-type: none;\n  width: ', ';;\n  margin: 0;\n  padding: 0;\n'], ['\n  display: ', ';\n  justify-content: space-between;\n  list-style-type: none;\n  width: ', ';;\n  margin: 0;\n  padding: 0;\n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavLink from './NavLink';

var defaultLinks = [{ text: 'Home', href: '/', icon: 'home' }, { text: 'Help', href: '/help', icon: 'question-line' }];

var Wrapper = styled.ul(_templateObject, function (props) {
  return props.isMobile ? 'block' : 'flex';
}, function (props) {
  return props.isMobile ? '100%' : '40%';
});

/** Renders the navbar links */
function NavLinks(_ref) {
  var _ref$links = _ref.links,
      links = _ref$links === undefined ? defaultLinks : _ref$links,
      _ref$isMobile = _ref.isMobile,
      isMobile = _ref$isMobile === undefined ? false : _ref$isMobile,
      props = _objectWithoutProperties(_ref, ['links', 'isMobile']);

  return React.createElement(
    Wrapper,
    { isMobile: isMobile },
    links.map(function (link) {
      return React.createElement(NavLink, Object.assign({
        link: link,
        key: link.text,
        isMobile: isMobile
      }, props));
    })
  );
}

NavLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.string
  })),
  isMobile: PropTypes.bool
};

export default NavLinks;