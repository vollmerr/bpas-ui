/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import * as storybook from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'BPAS UI',
  url: 'https://github.com/vollmerr/bpas-ui',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: false,
});

storybook.configure(() => require('../stories'), module);
