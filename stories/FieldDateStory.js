import React from 'react';
import { storiesOf } from '@storybook/react';
import { FieldDate, Field } from '../src/components';
import Provider from './util/Provider';
import ReduxForm, { storyOnChange } from './util/ReduxForm';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

const widths = [
  12,
  9,
  6,
  4,
  3
];

storiesOf('FieldDate', module)
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
                name={`basic_date_${width}`}
                label={`Date Input (xs-${width})`}
                component={FieldDate}
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
                name={`tooltip_date_${width}`}
                label={`Date Input with Tooltip (xs-${width})`}
                tooltip={'This is a tooltip.'}
                component={FieldDate}
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
                name={`required_date_${width}`}
                label={`Required Date Input (xs-${width})`}
                tooltip={'This is a tooltip.'}
                component={FieldDate}
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
                name={`disabled_date_${width}`}
                label={`Disabled Date Input (xs-${width})`}
                tooltip={'This is a tooltip.'}
                component={FieldDate}
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
        name={'onchange_date'}
        label={'Date Input onChange'}
        onChange={storyOnChange}
        placeholder={'Look at the console'}
        component={FieldDate}
      />
    </ReduxForm>
  ));
