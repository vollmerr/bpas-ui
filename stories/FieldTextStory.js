import React from 'react';
import { storiesOf } from '@storybook/react';
import { FieldText, Field } from 'bpas-ui';
import Provider from './util/Provider';
import ReduxForm from './util/ReduxForm';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

const widths = [
  12,
  9,
  6,
  4,
  3
];

const exampleValidation = value => (
  !value || value.length < 3
  ? 'Enter more than 3 characters!'
  : undefined
);

storiesOf('FieldText')
  .addDecorator(story =>
    <Provider story={story} />
  )
  .add('Basic', () => (
    <ReduxForm>
      {
        widths.map((width) => (
          <Row key={width}>
            <Col xs={width}>
              <Field
                name={`basic_text_${width}`}
                label={`Text Input (xs-${width})`}
                component={FieldText}
              />
            </Col>
          </Row>
        ))
      }
    </ReduxForm>
  ))
  .add('Tooltip', () => (
    <ReduxForm>
      {
        widths.map((width) => (
          <Row key={width}>
            <Col xs={width}>
              <Field
                icon
                name={`tooltip_text_${width}`}
                label={`Text Tnput with Tooltip (xs-${width})`}
                tooltip={'This is a tooltip.'}
                component={FieldText}
              />
            </Col>
          </Row>
        ))
      }
    </ReduxForm>
  ))
  .add('Required', () => (
    <ReduxForm>
      {
        widths.map((width) => (
          <Row key={width}>
            <Col xs={width}>
              <Field
                required
                name={`required_text_${width}`}
                label={`Required Text Input (xs-${width})`}
                tooltip={'This is a tooltip.'}
                component={FieldText}
              />
            </Col>
          </Row>
        ))
      }
    </ReduxForm>
  ))
  .add('Disabled', () => (
    <ReduxForm>
      {
        widths.map((width) => (
          <Row key={width}>
            <Col xs={width}>
              <Field
                disabled
                name={`disabled_text_${width}`}
                label={`Disabled Text Input (xs-${width})`}
                tooltip={'This is a tooltip.'}
                component={FieldText}
              />
            </Col>
          </Row>
        ))
      }
    </ReduxForm>
  ))
  .add('Custom onChange', () => (
    <ReduxForm>
      <Field
        name={'custom_onchange'}
        label={'Text Input onChange'}
        onChange={(event, newValue, previousValue) => {
          console.log(
            'event: ', event,
            'newValue: ', newValue,
            'previousValue: ', previousValue
          );
        }}
        placeholder={'Look at the console'}
        component={FieldText}
      />
    </ReduxForm>
  ))
  .add('Custom validation', () => (
    <ReduxForm>
      <Field
        name={'custom_validation_input'}
        label={'Text Input with custom validation'}
        validate={[exampleValidation]}
        placeholder={'Error if less than 3 characters'}
        component={FieldText}
      />
    </ReduxForm>
  ));
