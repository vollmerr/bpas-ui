import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const Links = styled.a`
  color: #fff;
  padding: ${theme.size.xs}px;

  &:hover {
    text-decoration: none;
    color: ${theme.color.second};
  }
`;

/** Renders the title bars links */
function TitleLinks(props) {
  return (
      <Links href={'/help'} {...props}>Contact Us</Links>
  );
}

export default TitleLinks;
