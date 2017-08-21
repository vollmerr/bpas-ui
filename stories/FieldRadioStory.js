import React from 'react';
import { storiesOf } from '@storybook/react';
import { FieldRadio } from 'bpas-ui';
import Provider from './utils/Provider';
import ReduxForm from './utils/ReduxForm';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

const options = [
  { label: 'Option 1 Label', value: 'Option 1 Value' },
  { label: 'Option 2 Label', value: 'Option 2 Value' },
  { label: 'Option 3 Label', value: 'Option 3 Value' },
  { label: 'Option 4 Label', value: 'Option 4 Value' },
];

storiesOf('FieldRadio')
  .addDecorator(story =>
    <Provider story={story} />
  )
  .add('Basic', () => (
    <ReduxForm
      init={
        { basic: options[0].value }
      }
    >
      <FieldRadio
        options={options}
        name={`basic`}
        label={`Radio input`}
      />
    </ReduxForm>
  ))
  .add('Tooltip', () => (
    <ReduxForm
      init={
        { tooltip: options[0].value }
      }
    >
      <FieldRadio
        icon
        options={options}
        name={`tooltip`}
        label={`Radio Input with Tooltip`}
        tooltip={'This is a tooltip.'}
      />
    </ReduxForm>
  ))
  .add('Required', () => (
    <ReduxForm
      init={
        { required: options[0].value }
      }
    >
      <FieldRadio
        required
        options={options}
        name={`required`}
        label={`Required Radio Input`}
        tooltip={'This is a tooltip.'}
      />
    </ReduxForm>
  ))
  .add('Disabled', () => (
    <ReduxForm
      init={
        { disabled: options[0].value }
      }
    >
      <FieldRadio
        disabled
        options={options}
        name={`disabled`}
        label={`Disabled Radio Input`}
        tooltip={'This is a tooltip.'}
      />
    </ReduxForm>
  ))
  .add('Custom onChange', () => (
    <ReduxForm
      init={
        { onChange: options[0].value }
      }
    >
      <FieldRadio
        name={'onChange'}
        label={'Radio input onChange'}
        options={options}
        onChange={(event, newValue, previousValue) => {
          console.log(
            '\nevent: ', event,
            '\nnewValue: ', newValue,
            '\npreviousValue: ', previousValue
          );
        }}
      />
    </ReduxForm>
  ));
