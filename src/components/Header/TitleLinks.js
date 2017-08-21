import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../util/theme';

const Links = styled(Link)`
  color: #fff;
  padding: ${theme.size.xs}px;
  transition: all 0.25s;

  &:hover,
  &:focus {
    text-decoration: none;
    color: ${theme.color.accent.yellow};
  }
`;

/** Renders the title bars links */
function TitleLinks(props) {
  return (
      <Links to={'/help'} {...props}>Contact Us</Links>
  );
}

export default TitleLinks;
