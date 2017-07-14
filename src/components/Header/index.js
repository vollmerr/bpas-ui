import React, { Component } from 'react';
import PropTypes from 'prop-types';
import theme from '../theme';

import TitleBar from './TitleBar';
import NavBar from './NavBar';

/** Renders the Header */
class Header extends Component {
  constructor(props) {
  super(props);
  this.state = {
      isMobile: false,
      mobileNavVisible: false,
    };
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const mobile = window.innerWidth <= theme.breakpoints.md;

    this.setState({isMobile: mobile});

    if (!mobile) {
      this.setState({mobileNavVisible: false});
    }
  }

  handleNavClick = (e) => {
    const { isMobile, mobileNavVisible } = this.state;

    if(isMobile && !mobileNavVisible) {
      this.setState({mobileNavVisible: true});
    } else {
      this.setState({mobileNavVisible: false});
    }
  }

  render() {
    const { title } = this.props;
    const { isMobile, mobileNavVisible } = this.state;

    const titleBarProps = {
      title,
      isMobile,
      onClick: this.handleNavClick,
    };

    const navBarProps = {
      isMobile,
      mobileNavVisible,
      onClick: this.handleNavClick,
    };

    return (
      <header>
        <TitleBar {...titleBarProps} />
        <NavBar {...navBarProps} />
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      href: PropTypes.string,
      icon: PropTypes.string,
    }),
  ),
};

export default Header;
