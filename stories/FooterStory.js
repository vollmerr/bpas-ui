import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import { Footer } from 'bpas-ui';

import Links from 'bpas-ui/Footer/Links';

storiesOf('Footer')
  .addDecorator(StoryRouter())
  .add('<Footer />', () => <Footer />)
  .add('<Links />', () => <Links />);
