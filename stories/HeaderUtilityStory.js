import React from 'react';
import { HeaderUtility } from 'bpas-ui';
import { storiesOf } from '@storybook/react';

storiesOf('Header Utility')
  .addWithInfo('with text', () => <HeaderUtility title="Personnel Access Authorization System" />);