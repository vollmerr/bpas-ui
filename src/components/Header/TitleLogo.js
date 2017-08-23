import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from './caGovLogo.svg';
import theme from '../util/theme';

const Image = styled.img`
  height: ${theme.size.titleBar}px;
  padding: ${theme.size.xs}px;
`;

/** Renders the title bars logo  */
function TitleLogo({
  onClick,
}) {
  return (
    <a href={'http://www.ca.gov'} onClick={onClick}>
      <Image src={logo} alt={'CA Gov Logo'} />
    </a>
  );
}

TitleLogo.propTypes = {
  onClick: PropTypes.func,
};

export default TitleLogo;
