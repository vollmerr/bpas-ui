import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavLink from './NavLink';
import theme from '../../util/theme';

const defaultLinks = [
  { text: 'Home', href: '/', icon: 'home' },
  { text: 'Help', href: '/help', icon: 'question-line' },
];

const Wrapper = styled.ul`
  display: ${props => props.isMobile ? 'block' : 'flex'};
  flex: 1;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;
  padding: 0;
  z-index: 1000;
`;

/** Renders the navbar links */
function NavLinks({
  links = defaultLinks,
  isMobile = false,
  ...props,
}) {
  return (
    <Wrapper isMobile={isMobile}>
      {links.map(link => (
        <NavLink
          link={link}
          key={link.text}
          isMobile={isMobile}
          {...props}
        />
      ))}
    </Wrapper>
  );
}

NavLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      href: PropTypes.string,
      icon: PropTypes.string,
    }),
  ),
  isMobile: PropTypes.bool,
};

export default NavLinks;
