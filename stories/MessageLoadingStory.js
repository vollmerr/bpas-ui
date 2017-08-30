import React from 'react';
import { MessageLoading } from '../src/components';
import { storiesOf } from '@storybook/react';

storiesOf('Util / MessageLoading', module)
  .add('default', () => <MessageLoading />);
