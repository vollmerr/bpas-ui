import React from 'react';
import styled from 'styled-components';
import logo from './_odiLogo.png';

const Wrapper = styled.a`
  margin: ${props => props.isMobile ? '15px 0' : '0'};
  display: inline-block;
  height: 60px;
`;

const Image = styled.img`
  height: 60px;
`;

/** Renders the navbar logo  */
function NavLogo(props) {
  return (
    <Wrapper href={'/'} {...props}>
      <Image src={logo} alt={'CA Department of Technology logo'} />
    </Wrapper>
  );
}

export default NavLogo;
