import React from 'react';
import GlobalStyle from '../../src/components/GlobalStyle';

export default function WithStyle({ story }) {
  return (
    <GlobalStyle>
      {story()}
    </GlobalStyle>
  );
}
