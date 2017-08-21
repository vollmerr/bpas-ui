var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n  font-size: ', 'px;\n  font-weight: 400;\n  padding: ', 'px;\n  margin: 0;\n  line-height: inherit;\n'], ['\n  color: ', ';\n  font-size: ', 'px;\n  font-weight: 400;\n  padding: ', 'px;\n  margin: 0;\n  line-height: inherit;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../util/theme';

var Text = styled.h1(_templateObject, theme.color.grey.white, theme.font.lg, theme.size.xs);

/** Renders the title bars title  */
function TitleText(_ref) {
  var title = _ref.title;

  return React.createElement(
    Text,
    null,
    title
  );
}

TitleText.propTypes = {
  title: PropTypes.string.isRequired
};

export default TitleText;