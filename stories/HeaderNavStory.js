import React from 'react';
import { HeaderNav } from 'bpas-ui';
import { storiesOf } from '@storybook/react';

storiesOf('Header Nav')
  .addWithInfo('with text', () => <HeaderNav title="test ti9tle" />);