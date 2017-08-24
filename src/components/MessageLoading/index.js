import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import theme from '../util/theme';

const animate = keyframes`
  0% {
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0 0 0 0;
  }
  30% {
    width: 60%;
    height: 60%;
    margin: -30% 0 0 -30%;
    opacity: 1;
  }
  100% {
    width: 100%;
    height: 100%;
    margin: -50% 0 0 -50%;
    opacity: 0;
  }
`;

const Ring = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;
  width: 0;
  height: 0;
  opacity: 0;
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;
  border-color: ${theme.color.theme.primary};
  animation: ${animate} 2s ease-out infinite;
`;

const RingDelayed = styled(Ring)`
  animation-delay: 1s;
  border-width: 2px;
`;

const Loading = styled.div`
  background: none;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  height: 200px;
`;

/**
 *  Displays a loading indicator
 */
function MessageLoading() {
  return (
    <Loading>
      <Ring />
      <RingDelayed />
    </Loading>
  );
}

MessageLoading.propTypes = {};

export default MessageLoading;
