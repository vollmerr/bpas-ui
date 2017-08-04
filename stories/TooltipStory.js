import React from 'react';
import { Tooltip, Label } from 'bpas-ui';
import { storiesOf } from '@storybook/react';

storiesOf('Tooltip')
  .add('Basic', () => <Tooltip id={'a'} tooltip={'Basic Tooltip...'}>Tooltip on a string</Tooltip>)
  .add('Without Icon', () => <Tooltip id={'b'} tooltip={'No Icon Tooltip...'} icon={false}>Tooltip without an icon</Tooltip>)
  .add('With Node child', () => <Tooltip id={'c'} tooltip={'A JSX node is the child...'}><span style={{color: 'red'}}>Tooltip for red text</span></Tooltip>);
