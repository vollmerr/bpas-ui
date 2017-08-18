import React from 'react';
import { Tooltip, Label } from 'bpas-ui';
import { storiesOf } from '@storybook/react';

storiesOf('Tooltip')
  .add('Basic', () => <Tooltip id={'a'} tooltip={'Basic Tooltip...'}>Tooltip on a string</Tooltip>)
  .add('Without Icon', () => <Tooltip id={'b'} tooltip={'No Icon Tooltip...'} icon={false}>Tooltip without an icon</Tooltip>)
  .add('With Node child', () => <Tooltip id={'c'} tooltip={'A JSX node is the child...'}><span style={{ color: 'red' }}>Tooltip for red text</span></Tooltip>)
  .add('With Long Text', () => (
    <Tooltip
      id={'d'}
      tooltip={
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
      }
    >
      Really long text...
    </Tooltip>)
  );
