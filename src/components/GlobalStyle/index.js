import React from 'react';
import styled from 'styled-components';
import theme from '../../util/theme';

const Wrapper = styled.div`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1em;
  line-height: 1.42857143;
  color: ${theme.color.bold};
  background: ${theme.color.primaryInverse};
`;

function GlobalStyle({
  children,
}) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default GlobalStyle;
