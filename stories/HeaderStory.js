import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import { Header } from 'bpas-ui';

import TitleBar from 'bpas-ui/Header/TitleBar';
import TitleLinks from 'bpas-ui/Header/TitleLinks';
import TitleLogo from 'bpas-ui/Header/TitleLogo';
import TitleText from 'bpas-ui/Header/TitleText';

import NavBar from 'bpas-ui/Header/NavBar';
import NavLinks from 'bpas-ui/Header/NavLinks';
import NavLink from 'bpas-ui/Header/NavLink';
import NavLogo from 'bpas-ui/Header/NavLogo';

storiesOf('Header')
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
