import React from 'react';
import { storiesOf } from '@storybook/react';
import { FieldRadio, Field } from '../src/components';
import Provider from './util/Provider';
import ReduxForm, { storyOnChange } from './util/ReduxForm';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

const options = [
  { label: 'Option 1 Label', value: 'Option 1 Value' },
  { label: 'Option 2 Label', value: 'Option 2 Value' },
  { label: 'Option 3 Label', value: 'Option 3 Value' },
  { label: 'Option 4 Label', value: 'Option 4 Value' },
];

storiesOf('FieldRadio', module)
  .addDecorator(story =>
    <Provider story={story} />
  )
  .add('Basic', () => (
    <ReduxForm
      init={
        { basic: options[0].value }
      }
    >
      <Field
        options={options}
        name={`basic`}
        label={`Radio input`}
        component={FieldRadio}
      />
    </ReduxForm>
  ))
  .add('Tooltip', () => (
    <ReduxForm
      init={
        { tooltip: options[0].value }
      }
    >
      <Field
        icon
        options={options}
        name={`tooltip`}
        label={`Radio Input with Tooltip`}
        tooltip={'This is a tooltip.'}
        component={FieldRadio}
      />
    </ReduxForm>
  ))
  .add('Required', () => (
    <ReduxForm
      init={
        { required: options[0].value }
      }
    >
      <Field
        required
        options={options}
        name={`required`}
        label={`Required Radio Input`}
        tooltip={'This is a tooltip.'}
        component={FieldRadio}
      />
    </ReduxForm>
  ))
  .add('Disabled', () => (
    <ReduxForm
      init={
        { disabled: options[0].value }
      }
    >
      <Field
        disabled
        options={options}
        name={`disabled`}
        label={`Disabled Radio Input`}
        tooltip={'This is a tooltip.'}
        component={FieldRadio}
      />
    </ReduxForm>
  ))
  .add('Custom onChange', () => (
    <ReduxForm
      init={
        { onChange: options[0].value }
      }
    >
      <Field
        name={'onChange'}
        label={'Radio input onChange'}
        options={options}
        onChange={storyOnChange}
        component={FieldRadio}
      />
    </ReduxForm>
  ));
