import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme';

const Text = styled.h1`
  color: ${theme.color.primaryInverse};
  font-size: ${theme.font.lg}px;
  padding: ${theme.size.xs}px;
  margin: 0;
  line-height: inherit;
`;

/** Renders the title bars title  */
function TitleText({
  title,
}) {
  return (
    <Text>{title}</Text>
  );
}

TitleText.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleText;
