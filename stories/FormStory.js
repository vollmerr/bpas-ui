import React from 'react';
import { storiesOf } from '@storybook/react';
import { Form } from 'bpas-ui';

import {
  Text,
  Select,
  Field,
} from '../src/components/Form';

storiesOf('Form')
  .add('<Form />', () => <Form />)
  .add('Text', () => <Text />)
  .add('Select', () => <Select />)
  .add('Field', () => <Field />);
