import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../util/theme';

import GlobalStyle from '../GlobalStyle';
import Header from '../Header';
import Container from '../Container';
import Footer from '../Footer';

const Content = styled(Container)`
  min-height: ${theme.size.contentHeight}px;
`;

function Page({
  children,
  title,
  links,
}) {
  const headerProps = {
    title,
    links,
  };

  return (
    <GlobalStyle>
      <Header {...headerProps} />
      <Content>
        {children}
      </Content>
      <Footer />
    </GlobalStyle>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      href: PropTypes.string,
      icon: PropTypes.string,
    }),
  ),
};

export default Page;
