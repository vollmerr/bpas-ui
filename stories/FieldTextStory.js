import React from 'react';
import { storiesOf } from '@storybook/react';
import { FieldText } from 'bpas-ui';
import Provider from './utils/Provider';
import ReduxForm from './utils/ReduxForm';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

const widths = [
  12,
  9,
  6,
  4,
  3
];

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
              <FieldText
                name={`basic_${width}`}
                label={`Text input (xs-${width})`}
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
              <FieldText
                icon
                name={`tooltip_${width}`}
                label={`Text Tnput with Tooltip (xs-${width})`}
                tooltip={'This is a tooltip.'}
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
              <FieldText
                required
                name={`tooltip_${width}`}
                label={`Required Text Input (xs-${width})`}
                tooltip={'This is a tooltip.'}
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
              <FieldText
                disabled
                name={`disabled_${width}`}
                label={`Disabled Text Input (xs-${width})`}
                tooltip={'This is a tooltip.'}
              />
            </Col>
          </Row>
        ))
      }
    </ReduxForm>
  ))
  .add('Custom onChange', () => (
    <ReduxForm>
      <FieldText
        name={'name4'}
        label={'Text input onChange'}
        onChange={(event, newValue, previousValue) => {
          console.log(
            'event: ', event,
            'newValue: ', newValue,
            'previousValue: ', previousValue
          );
        }}
        placeholder={'Look at the console'}
      />
    </ReduxForm>
  ));
