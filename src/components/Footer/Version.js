import React from 'react';
import styled from 'styled-components';
import theme from '../../util/theme';

const Wrapper = styled.div`
  flex: 3;
  text-align: right;
  padding: ${theme.size.xs}px ${theme.size.sm}px;
  white-space: nowrap;
  color: ${theme.color.grey.white};
`;

function Version() {
  return (
    <Wrapper>Version {process.env.VERSION}</Wrapper>
  );
}

export default Version;
