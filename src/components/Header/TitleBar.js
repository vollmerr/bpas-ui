import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-bootstrap';
import styled from 'styled-components';
import theme from '../../theme';

import TitleText from './TitleText';
import TitleLinks from './TitleLinks';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: ${theme.color.primary};
  height: ${theme.size.titleBar}px;
`;

const Center = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/** Renders the headers title bar */
function TitleBar({
  title,
  isMobile = false,
}) {
  return (
    <Wrapper>
      <Grid>
        <Center>
          <TitleText title={title} isMobile={isMobile} />
          <TitleLinks />
        </Center>
      </Grid>
    </Wrapper>
  );
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  isMobile: PropTypes.bool,
};

export default TitleBar;
