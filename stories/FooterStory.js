import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import { Footer } from '../src/components';

import Links from '../src/components/Footer/Links';

storiesOf('Footer', module)
  .addDecorator(StoryRouter())
  .add('<Footer />', () => <Footer />)
  .add('<Links />', () => <Links />);
