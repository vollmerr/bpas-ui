import React from 'react';
import { Header } from 'bpas-ui';
import TitleBar from 'bpas-ui/Header/TitleBar';
import { storiesOf } from '@storybook/react';

storiesOf('Header')
  .addWithInfo('<Header />', () => <Header title="Test Header Title" />)
  .addWithInfo('<TitleBar />', () => <TitleBar title="Test TitleBar Title" />);
