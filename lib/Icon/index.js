var _templateObject = _taggedTemplateLiteral(['\n  font-size: ', 'px;\n'], ['\n  font-size: ', 'px;\n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './style.css';

var StyledIcon = styled.span(_templateObject, function (props) {
    return props.size;
});

/** Renders an icon */
function Icon(_ref) {
    var icon = _ref.icon,
        className = _ref.className,
        _ref$size = _ref.size,
        size = _ref$size === undefined ? 20 : _ref$size,
        props = _objectWithoutProperties(_ref, ['icon', 'className', 'size']);

    return React.createElement(StyledIcon, Object.assign({
        className: 'ca-gov-icon-' + icon + ' ' + className,
        size: size
    }, props));
}

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    className: PropTypes.string,
    size: PropTypes.number
};

export default Icon;