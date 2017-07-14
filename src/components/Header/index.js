import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TitleBar from './TitleBar';

const Wrapper = styled.header`

`;

/** Renders the Header */
class Header extends Component {
  constructor(props) {
  super(props);
  this.state = {
      width: window.innerWidth,
      mobileVisible: false
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({windowWidth: window.innerWidth});
  }

  render() {
    return (
      <Wrapper>
        <TitleBar title={title} isMobile={isMobile} />
        {/* <Navigation links={links} /> */}
      </Wrapper>
    );
  }
}

Header.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      href: PropTypes.string,
      icon: PropTypes.string,
    }),
  ),
};

export default Header;









/**

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';
import {
  Branding,
  MobileControls,
  UtilityHeader,
  Navigation,
} from '../../components';
import * as requestFormActions from '../../actions/requestFormActions';
import { USER_ROLE, ROLE_SECURITY, ROLE_GUARD } from '../../store/keyMap';

import {Link} from 'react-router';

class Header extends Component {
  constructor(props) {
super(props);
this.state = {
    windowWidth: window.innerWidth,
    mobileNavVisible: false
  };
}

handleResize() {
  this.setState({windowWidth: window.innerWidth});
}

componentDidMount() {
  window.addEventListener('resize', this.handleResize.bind(this));
}

componentWillUnmount() {
  window.removeEventListener('resize', this.handleResize.bind(this));
}

navigationLinks() {
  return [
    <ul>
      <li key={112321}><Link to="about">ABOUT</Link></li>
      <li key={2123}><Link to="blog">BLOG</Link></li>
      <li key={3123123}><Link to="portfolio">PORTFOLIO</Link></li>
    </ul>
  ];
}

renderMobileNav() {
  if(this.state.mobileNavVisible) {
    return this.navigationLinks();
  }
}

handleNavClick() {
  if(!this.state.mobileNavVisible) {
    this.setState({mobileNavVisible: true});
  } else {
    this.setState({mobileNavVisible: false});
  }
}

renderNavigation() {
  if(this.state.windowWidth <= 1080) {
    return [
      <div className="mobile_nav">
        <p onClick={this.handleNavClick.bind(this)}><i className="material-icons">view_headline</i></p>
        {this.renderMobileNav()}
      </div>
    ];
  } else {
    return [
      <div key={7} className="nav_menu">
        {this.navigationLinks()}
      </div>
    ];
  }
}

//our other functions, and state will go here soon

render() {
return(
  <div className="nav_container">
    <div className="site_title"><Link to="/">WEBSITE TITLE</Link></div>
    {this.renderNavigation()}
  </div>
)
}
}

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  destroy: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  requestsUser: state.requestsUser,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...requestFormActions,
  }, dispatch),
});

Header = reduxForm({
  form: 'wizard',
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
})(Header);

export default connect(mapStateToProps, mapDispatchToProps)(Header);


*/
