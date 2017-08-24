import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import { Header } from '../src/components';

import TitleBar from '../src/components/Header/TitleBar';
import TitleLinks from '../src/components/Header/TitleLinks';
import TitleLogo from '../src/components/Header/TitleLogo';
import TitleText from '../src/components/Header/TitleText';

import NavBar from '../src/components/Header/NavBar';
import NavLinks from '../src/components/Header/NavLinks';
import NavLink from '../src/components/Header/NavLink';
import NavLogo from '../src/components/Header/NavLogo';

storiesOf('Header', module)
  .addDecorator(StoryRouter())
  .add('<Header />', () => <Header title="Test Header" />)

  .add('<TitleBar />', () => <TitleBar title="Test TitleBar" />)
  .add('<TitleLinks />', () => <TitleLinks />)
  .add('<TitleLogo />', () => <TitleLogo />)
  .add('<TitleText />', () => <TitleText title="Test TitleText" />)

  .add('<NavBar />', () => <NavBar />)
  .add('<NavLinks />', () => <NavLinks />)
  .add('<NavLink />', () => <NavLink link={{ href: '/example', text: 'Example NavLink', icon: 'science' }} />)
  .add('<NavLogo />', () => <NavLogo />);
