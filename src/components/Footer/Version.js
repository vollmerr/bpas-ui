import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../theme';

const Wrapper = styled.div`
  flex: 3;
  text-align: right;
  padding: ${theme.size.xs}px ${theme.size.sm}px;
  white-space: nowrap;
  color: ${theme.color.primaryInverse};
`;

function Version() {
  return (
    <Wrapper>Version {process.env.VERSION}</Wrapper>
  );
}

export default Version;
