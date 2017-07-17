import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

import Container from '../Container';
import Links from './Links';

const Wrapper = styled.footer`
  min-height: ${theme.size.footer}px;
  display: flex;
  align-items: center;
  background: ${theme.color.bold};
`;

/** Renders the title bars logo  */
function Footer() {
  return (
    <Wrapper>
      <Container>
        <Links />
      </Container>
    </Wrapper>
  );
}

export default Footer;
