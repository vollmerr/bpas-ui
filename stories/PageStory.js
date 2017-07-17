import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import { Page } from 'bpas-ui';

storiesOf('Page')
  .addDecorator(StoryRouter())
  .add('<Page />', () => <Page title="Test Header Title">content goes here</Page>);
