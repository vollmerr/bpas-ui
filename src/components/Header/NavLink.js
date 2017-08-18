import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../Icon';
import theme from '../../util/theme';

const Wrapper = styled.li`
    text-align: ${props => props.isMobile ? 'left' : 'center'};
    flex: 1;

    &:not(:last-child) {
      border-bottom: ${props => props.isMobile ? `1px solid ${theme.color.primaryFaded}` : 'none'};
    }
`;

const StyledIcon = styled(Icon)`
    display: ${props => props.isMobile ? 'inline-block' : 'block'};
    vertical-align: ${props => props.isMobile ? 'middle' : 'baseline'};
    color: ${theme.color.primaryFaded};
    padding-right: ${props => props.isMobile ? '10px' : '0'};
`;

const StyledLink = styled(Link)`
    display: block;
    color: inherit;
    padding: ${theme.size.sm}px ${theme.size.xl}px;

    &:hover,
    &:focus,
    &.active,
    &:hover > ${StyledIcon},
    &:focus > ${StyledIcon},
    &.active > ${StyledIcon} {
      text-decoration: none;
      color: ${theme.color.primary};
    }
`;

/** Renders a single navbar link */
function NavLink({
  link,
  isMobile,
  onClick,
}) {
  return (
    <Wrapper isMobile={isMobile}>
      <StyledLink
        exact={link.href === '/'}
        to={link.href}
        onClick={onClick}
      >
        <StyledIcon
          icon={link.icon}
          size={32}
          isMobile={isMobile}
        />
        {link.text}
      </StyledLink>
    </Wrapper>
  );
}

NavLink.PropTypes = {
  link: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
  isMobile: PropTypes.bool,
  onClick: PropTypes.func,
};

export default NavLink;
