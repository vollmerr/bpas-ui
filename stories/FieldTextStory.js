import React from 'react';
import { storiesOf } from '@storybook/react';
import { FieldText } from 'bpas-ui';
import Provider from './utils/Provider';
import ReduxForm from './utils/ReduxForm';

storiesOf('FieldText')
  .addDecorator(story =>
    <Provider story={story} />
  )
  .add('Basic', () => (
    <ReduxForm>
      <FieldText
        name={'name0'}
        label={'Text input'}
      />
    </ReduxForm>
  ))
  .add('Tooltip', () => (
    <ReduxForm>
      <FieldText
        name={'name1'}
        label={'Text input with tooltip'}
        tooltip={'This is a tooltip'}
      />
    </ReduxForm>
  ))
  .add('Required', () => (
    <ReduxForm>
      <FieldText
        required
        name={'name2'}
        label={'Text input required'}
      />
    </ReduxForm>
  ))
  .add('Disabled', () => (
    <ReduxForm>
      <FieldText
        disabled
        name={'name3'}
        label={'Text input disabled'}
      />
    </ReduxForm>
  ))
  .add('Custom onChange', () => (
    <ReduxForm>
      <FieldText
        name={'name4'}
        label={'Text input onChange (look at console)'}
        onChange={(event, newValue, previousValue) => {
          console.log(
            'event: ', event,
            'newValue: ', newValue,
            'previousValue: ', previousValue
          );
        }}
      />
    </ReduxForm>
  ));
