/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';
import { configure, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'BPAS UI',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: false,
});

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
