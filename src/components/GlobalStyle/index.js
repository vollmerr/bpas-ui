import React from 'react';
import styled from 'styled-components';
import theme from '../util/theme';
import './ca-gov-core.css';

const Wrapper = styled.div`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1em;
  line-height: 1.42857143;
  color: ${theme.color.grey.primary};
  background: ${theme.color.grey.white};
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
