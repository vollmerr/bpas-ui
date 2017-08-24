import React from 'react';
import { MessageLoading } from '../src/components';
import { storiesOf } from '@storybook/react';

storiesOf('MessageLoading', module)
  .add('default', () => <MessageLoading />);
