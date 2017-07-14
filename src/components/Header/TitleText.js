import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from '../../../public/img/Ca-Gov-Logo-Gold.svg';
import theme from '../../theme';

const Wrapper = styled.div`
  display: flex;
`;

const Image = styled.img`
  height: ${theme.size.titleBar}px;
  padding: ${theme.size.xs}px;
`;

const Text = styled.h1`
  color: ${theme.color.primaryInverse};
  font-size: ${theme.font.lg}px;
  padding: ${theme.size.xs}px;
  margin: 0;
  line-height: inherit;
`;

/** Renders the headers title (and logo)  */
function TitleText({
  title,
  isMobile = false,
}) {
  return (
    <Wrapper>
      <a href={'http://www.ca.gov'}>
        <Image src={logo} alt={'CA Gov Logo'} />
      </a>
      {!isMobile && <Text>{title}</Text>}
    </Wrapper>
  );
}

TitleText.propTypes = {
  title: PropTypes.string.isRequired,
  isMobile: PropTypes.bool,
};

export default TitleText;
