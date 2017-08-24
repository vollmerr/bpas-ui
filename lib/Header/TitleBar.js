var _templateObject = _taggedTemplateLiteral(['\n  background: ', ';\n  height: ', 'px;\n'], ['\n  background: ', ';\n  height: ', 'px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-width: ', 'px;\n'], ['\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-width: ', 'px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: flex;\n'], ['\n  display: flex;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../util/theme';

import Container from '../Container';
import TitleLogo from './TitleLogo';
import TitleText from './TitleText';
import TitleLinks from './TitleLinks';

var Wrapper = styled.div(_templateObject, theme.color.theme.primary, theme.size.titleBar);

var Content = styled.div(_templateObject2, theme.size.minWidth);

var Left = styled.div(_templateObject3);

/** Renders the headers title bar */
function TitleBar(_ref) {
  var title = _ref.title,
      _ref$isMobile = _ref.isMobile,
      isMobile = _ref$isMobile === undefined ? false : _ref$isMobile,
      onClick = _ref.onClick;

  return React.createElement(
    Wrapper,
    null,
    React.createElement(
      Container,
      null,
      React.createElement(
        Content,
        null,
        React.createElement(
          Left,
          null,
          React.createElement(TitleLogo, { onClick: onClick }),
          !isMobile && React.createElement(TitleText, { title: title })
        ),
        React.createElement(TitleLinks, { onClick: onClick })
      )
    )
  );
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  isMobile: PropTypes.bool,
  onClick: PropTypes.func
};

export default TitleBar;