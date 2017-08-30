import React from 'react';
import { storiesOf } from '@storybook/react';
import { FieldSelect, Field } from '../src/components';
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

const options = [
  { label: 'Option 1 Label', value: 'Option 1 Value' },
  { label: 'Option 2 Label', value: 'Option 2 Value' },
  { label: 'Option 3 Label', value: 'Option 3 Value' },
  { label: 'Option 4 Label', value: 'Option 4 Value' },
]

storiesOf('Form / FieldSelect', module)
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
                options={options}
                name={`basic_select_${width}`}
                label={`Select Input (xs-${width})`}
                component={FieldSelect}
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
                options={options}
                name={`tooltip_select_${width}`}
                label={`Select Input with Tooltip (xs-${width})`}
                tooltip={'This is a tooltip.'}
                component={FieldSelect}
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
                options={options}
                name={`required_select_${width}`}
                label={`Required Select Input (xs-${width})`}
                tooltip={'This is a tooltip.'}
                component={FieldSelect}
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
                options={options}
                name={`disabled_select_${width}`}
                label={`Disabled Select Input (xs-${width})`}
                tooltip={'This is a tooltip.'}
                component={FieldSelect}
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
        options={options}
        name={'onchange_select'}
        label={'Select Input onChange'}
        onChange={storyOnChange}
        onBlur={() => console.log("f")}
        placeholder={'Select an option'}
        component={FieldSelect}
      />
    </ReduxForm>
  ));
