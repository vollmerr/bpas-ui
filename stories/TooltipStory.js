import React from 'react';
import { Tooltip, Label } from '../src/components';
import { storiesOf } from '@storybook/react';

const longTooltip = (
  <div style={{ textAlign: 'left' }}>
    <p>A really really long tooltip with lists and such...</p>
    <p>Please don't do it like this.......</p>
    <ul>
      <li>First Item</li>
      <li>Second Item</li>
      <li>Third Item</li>
      <li>Another Item</li>
      <li>Thee Last Item</li>
    </ul>
    <p>More text!</p>
  </div>
);

storiesOf('Util / Tooltip', module)
  .add('default', () => <Tooltip id={'default'} tooltip={'Basic Tooltip...'}>Tooltip on a string</Tooltip>)
  .add('icon = false', () => <Tooltip id={'icon = false'} tooltip={'No Icon Tooltip...'} icon={false}>Tooltip without an icon</Tooltip>)
  .add('node child', () => <Tooltip id={'node child'} tooltip={'A JSX node is the child...'}><span style={{ color: 'red' }}>Tooltip for red text</span></Tooltip>)
  .add('long tooltip', () => <Tooltip id={'long tooltip'} tooltip={longTooltip}>Really long text...</Tooltip>);
