import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../theme';

import Version from './Version';

const urls = [
  {name: 'Conditions of Use', to: 'http://www.ca.gov/Use'},
  {name: 'Privacy Policy', to: 'http://www.ca.gov/Privacy'},
  {name: 'Accessibility', to: 'http://www.ca.gov/Accessibility'},
  {name: 'Contact Us', to: '/help'},
];

const Wrapper = styled.div`
  display: flex;
  flex: 6;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const StyledLink = styled(Link)`
  color: ${theme.color.primaryInverse};
  white-space: nowrap;
  min-width: 150px;
  display: flex;
  transition: all 0.25s;

  &:hover,
  &:focus {
    color: ${theme.color.second};
  }
`;

const StyledAnchor = StyledLink.withComponent('a');

function link(url) {
  if(url.to.match(/^http/)) {
    return <StyledAnchor href={url.to} key={url.name}>{url.name}</StyledAnchor>;
  } else {
    return <StyledLink to={url.to} key={url.name}>{url.name}</StyledLink>;
  }
}

function Links() {
  return (
    <Wrapper>
      {urls.map(url => link(url))}
      <Version />
    </Wrapper>
  );
}

export default Links;
