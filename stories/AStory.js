import React from 'react';
import { A } from '../src/components';
import StoryRouter from 'storybook-router';
import { storiesOf } from '@storybook/react';

storiesOf('Util / A', module)
  .addDecorator(StoryRouter())
  .add('internal link', () => <A href={'/internal'}>Internal Link Example</A>)
  .add('external link', () => <A href={'http://www.google.com'}>External Link Example</A>);
