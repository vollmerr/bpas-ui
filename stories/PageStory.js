import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import { Page } from 'bpas-ui';

const customLinks = [
  {text: 'Test Home', href: '/Page1', icon: 'home'},
  {text: 'Test page 2', href: '/Page2', icon: 'favorite'},
  {text: 'Test 3', href: '/Page3', icon: 'gear'},
];

storiesOf('Page')
  .addDecorator(StoryRouter())
  .add('default links', () => <Page title="Test Default Page">content goes here</Page>)
  .add('custom links', () => <Page title="Test Custom Links Page" links={customLinks}>content goes here</Page>);
