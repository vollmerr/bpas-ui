import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './_odiLogo.png';

const Wrapper = styled(Link)`
  display: inline-block;
`;

const Image = styled.img`
  margin: ${props => props.isMobile ? '15px 0' : '0'};
  height: 60px;
`;

/** Renders the navbar logo  */
function NavLogo({
  isMobile,
  onClick,
}) {
  return (
    <Wrapper to={'/'} onClick={onClick}>
      <Image
        src={logo}
        alt={'CA Department of Technology logo'}
        isMobile={isMobile}
      />
    </Wrapper>
  );
}

NavLogo.PropTypes = {
  onClick: PropTypes.func,
};


export default NavLogo;
