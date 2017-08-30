import React from 'react';
import { Button } from '../src/components';
import { storiesOf } from '@storybook/react';
import WithStyle from './util/WithStyle';

const onClick = () => alert('button clicked.');

const styles = [
  'default',
  'primary',
  'secondary',
];

const mapStyles = props => (
  <div>
    {
      styles.map(style => (
        <Button
          {...props}
          text={`${style} ${props.text}`}
          styleType={style}
          style={{ margin: '10px' }}
        />
      ))
    }
  </div>
);

storiesOf('Util / Button', module)
  .addDecorator(story => <WithStyle story={story} />)
  .add('basic', () => mapStyles({ text: 'Basic Button' }))
  .add('onClick', () => mapStyles({ text: 'Button with onClick', onClick }));

