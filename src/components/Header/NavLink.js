import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../Icon';
import theme from '../../theme';


const Wrapper = styled.li`
    &:not(:last-child) {
      border-bottom: ${props => props.isMobile ? `1px solid ${theme.color.faded}` : 'none'};
    }
`;

const StyledIcon = styled(Icon)`
    display: ${props => props.isMobile ? 'inline-block' : 'block'};
    vertical-align: ${props => props.isMobile ? 'middle' : 'baseline'};
    color: ${theme.color.faded};
    padding-right: ${props => props.isMobile ? '10px' : '0'}
`;

const Link = styled.a`
    display: block;
    color: inherit;
    text-align: ${props => props.isMobile ? 'left' : 'center'};
    padding: ${theme.size.sm}px;

    &:hover,
    &:focus,
    &:hover > ${StyledIcon},
    &:focus > ${StyledIcon} {
      text-decoration: none;
      color: ${theme.color.primary};
    }
`;

/** Renders a single navbar link */
function NavLink({
  link,
  isMobile,
  mobileNavVisible,
  onClick,
}) {
  return (
    <Wrapper isMobile={isMobile}>
      <Link
        href={link.href}
        onClick={onClick}
        isMobile={isMobile}
      >
        <StyledIcon
          icon={link.icon}
          size={32}
          isMobile={isMobile}
        />
        {link.text}
      </Link>
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
  mobileNavVisible: PropTypes.bool,
  onClick: PropTypes.func,
};

export default NavLink;





