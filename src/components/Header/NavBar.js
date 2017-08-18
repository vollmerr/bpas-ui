import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../util/theme';

import Container from '../Container';
import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import NavMobile from './NavMobile';

const Wrapper = styled.div`
  min-width: 100%;
  background: ${theme.color.primaryInverse};
  border-bottom: 5px solid ${theme.color.second};
`;

const Content = styled.div`
  align-items: center;
  display: ${props => props.isMobile ? 'block' : 'flex'};
  justify-content: space-between;
  min-height: ${theme.size.navBar}px;
`;

/** Renders the headers title bar */
function NavBar({
  links,
  isMobile = false,
  mobileNavVisible = false,
  onClick,
  onToggle,
}) {
  const navLogoProps = {
    isMobile,
    onClick,
  };

  const navMobileProps = {
    onClick: onToggle,
  };

  const navLinksProps = {
    links,
    isMobile,
    onClick,
  };

  const displayLinks = mobileNavVisible || !isMobile;

  return (
    <Wrapper>
      <Container>
        <Content isMobile={isMobile}>
          <NavLogo {...navLogoProps} />
          {isMobile && <NavMobile {...navMobileProps} />}
          {displayLinks && <NavLinks {...navLinksProps} />}
        </Content>
      </Container>
    </Wrapper>
  );
}

NavBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      href: PropTypes.string,
      icon: PropTypes.string,
    }),
  ),
  isMobile: PropTypes.bool,
  mobileNavVisible: PropTypes.bool,
  onClick: PropTypes.func,
};

export default NavBar;
