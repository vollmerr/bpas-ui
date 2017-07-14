import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-bootstrap';
import styled from 'styled-components';
import theme from '../../theme';

import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import NavMobile from './NavMobile';

const Wrapper = styled.div`
  position: fixed;
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
}) {
  const navLogoProps = {
    isMobile,
    onClick,
  };

  const navMobileProps = {
    onClick,
  };

  const navLinksProps = {
    links,
    isMobile,
    onClick,
  };

  const displayLinks = mobileNavVisible || !isMobile;

  return (
    <Wrapper>
      <Grid>
        <Content isMobile={isMobile}>
          <NavLogo {...navLogoProps} />
          {isMobile && <NavMobile {...navMobileProps} />}
          {displayLinks && <NavLinks {...navLinksProps} />}
        </Content>
      </Grid>
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
