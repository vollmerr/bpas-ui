import React from 'react';
import { Icon } from '../src/components';
import { storiesOf } from '@storybook/react';

storiesOf('Icon', module)
  .add('home', () => <Icon icon="home" />);
