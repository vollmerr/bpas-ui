var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  height: ', 'px;\n  margin-bottom: ', 'px;\n  position: relative;\n  z-index: ', '\n'], ['\n  height: ', 'px;\n  margin-bottom: ', 'px;\n  position: relative;\n  z-index: ', '\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme';

import TitleBar from './TitleBar';
import NavBar from './NavBar';

var Wrapper = styled.header(_templateObject, theme.size.header, theme.size.lg, theme.index.header);

/** Renders the Header */

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.handleResize = function () {
      var mobile = window.innerWidth <= theme.breakpoints.md;

      _this.setState({ isMobile: mobile });

      if (!mobile) {
        _this.setState({ mobileNavVisible: false });
      }
    };

    _this.handleNavToggle = function () {
      var _this$state = _this.state,
          isMobile = _this$state.isMobile,
          mobileNavVisible = _this$state.mobileNavVisible;


      if (isMobile && !mobileNavVisible) {
        _this.setState({ mobileNavVisible: true });
      } else {
        _this.setState({ mobileNavVisible: false });
      }
    };

    _this.handleNavClose = function () {
      _this.setState({ mobileNavVisible: false });
    };

    _this.state = {
      isMobile: false,
      mobileNavVisible: false
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: 'render',
    value: function render() {
      var title = this.props.title;
      var _state = this.state,
          isMobile = _state.isMobile,
          mobileNavVisible = _state.mobileNavVisible;


      var titleBarProps = {
        title: title,
        isMobile: isMobile,
        onClick: this.handleNavClose
      };

      var navBarProps = {
        isMobile: isMobile,
        mobileNavVisible: mobileNavVisible,
        onClick: this.handleNavClose,
        onToggle: this.handleNavToggle
      };

      return React.createElement(
        Wrapper,
        null,
        React.createElement(TitleBar, titleBarProps),
        React.createElement(NavBar, navBarProps)
      );
    }
  }]);

  return Header;
}(Component);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.string
  }))
};

export default Header;