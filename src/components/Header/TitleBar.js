import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../util/theme';

import Container from '../Container';
import TitleLogo from './TitleLogo';
import TitleText from './TitleText';
import TitleLinks from './TitleLinks';

const Wrapper = styled.div`
  background: ${theme.color.theme.primary};
  height: ${theme.size.titleBar}px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: ${theme.size.minWidth}px;
`;

const Left = styled.div`
  display: flex;
`;

/** Renders the headers title bar */
function TitleBar({
  title,
  isMobile = false,
  onClick,
}) {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Left>
            <TitleLogo onClick={onClick} />
            {!isMobile && <TitleText title={title} />}
          </Left>
          <TitleLinks onClick={onClick} />
        </Content>
      </Container>
    </Wrapper>
  );
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  isMobile: PropTypes.bool,
  onClick: PropTypes.func,
};

export default TitleBar;
