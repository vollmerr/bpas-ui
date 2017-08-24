import React from 'react';
import { MessageError } from '../src/components';
import { storiesOf } from '@storybook/react';

const exampleOnClick = () => alert('Error message button clicked.');
const exampleError = 'This is an error message.';
const exampleButtonText = 'Custom Error Message Button';

storiesOf('MessageError', module)
  .add('default', () => <MessageError />)
  .add('error', () => <MessageError error={exampleError} />)
  .add('onClick', () => <MessageError onClick={exampleOnClick} />)
  .add('buttonText', () => <MessageError onClick={exampleOnClick} buttonText={exampleButtonText} />)
  .add('all props', () => <MessageError onClick={exampleOnClick} buttonText={exampleButtonText} error={exampleError} />);
