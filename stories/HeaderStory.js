import React from 'react';
import { Header } from 'bpas-ui';
import { storiesOf } from '@storybook/react';

storiesOf('Header')
  .addWithInfo('with text', () => <Header title="test ti9tle" />);
