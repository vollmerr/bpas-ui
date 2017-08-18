import React from 'react';
import { storiesOf } from '@storybook/react';
import { FieldSelect } from 'bpas-ui';
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

const options = [
  { label: 'Option 1 Label', value: 'Option 1 Value' },
  { label: 'Option 2 Label', value: 'Option 2 Value' },
  { label: 'Option 3 Label', value: 'Option 3 Value' },
  { label: 'Option 4 Label', value: 'Option 4 Value' },
]

storiesOf('FieldSelect')
  .addDecorator(story =>
    <Provider story={story} />
  )
  .add('Basic', () => (
    <ReduxForm>
      {
        widths.map((width) => (
          <Row key={width}>
            <Col xs={width}>
              <FieldSelect
                options={options}
                name={`basic_${width}`}
                label={`Select input (xs-${width})`}
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
              <FieldSelect
                icon
                options={options}
                name={`tooltip_${width}`}
                label={`Select Tnput with Tooltip (xs-${width})`}
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
              <FieldSelect
                required
                options={options}
                name={`tooltip_${width}`}
                label={`Required Select Input (xs-${width})`}
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
              <FieldSelect
                disabled
                options={options}
                name={`disabled_${width}`}
                label={`Disabled Select Input (xs-${width})`}
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
      <FieldSelect
        options={options}
        name={'name4'}
        label={'Select input onChange'}
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
