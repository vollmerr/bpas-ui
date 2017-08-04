import React from 'react';
import { storiesOf } from '@storybook/react';
import { Form } from 'bpas-ui';
import Provider from './utils/Provider.js';

import {
  Text,
  Select,
  Field,
} from '../src/components/Form';

storiesOf('Form')
  .addDecorator(story =>
    <Provider>{story()}</Provider>
  )
  .add('<Form />', () => <Form />)
  .add('Text', () => <Text />)
  .add('Select', () => <Select />)
  .add('Field', () => <Field />);



// const testData = {
//   test1: {
//     onChange: () => {console.log('custom change!')},
//     onBlur: () => {console.log('custom onBlur!')},
//     name: 'test1',
//     label: 'Test 1 Label',
//     value: '',
//     disabled: false,
//     placeholder: 'Test Placeholder',
//     validation: ['REQUIRED'],
//     error: '',
//     visible: true,
//     tooltip: 'test tooltip.',
//     icon: true,
//   },
//   test2: {
//     onChange: () => {},
//     onBlur: () => {},
//     name: 'test2',
//     label: 'Test 2 Label',
//     value: 'preloaded data',
//     disabled: false,
//     placeholder: 'Test Placeholder 2',
//     validation: ['test1'],
//     error: '',
//     visible: true,
//   },
// };


// function testSubmit(vals) {
//   console.log("SUBMITTING!", vals);
// }

// const REQUIRED = 'REQUIRED';
// const test1 = 'test1';

// function testValidate({
//   type,
//   value,
//   fields,
// }) {
//   switch(type) {
//     case REQUIRED:
//       if (
//         !value ||
//         !value.length
//       ) {
//         return 'Required';
//       }
//       break;

//     case test1:
//       if (
//         fields['test1'].value &&
//         (!value || !value.length)
//       ) {
//         return 'Required';
//       }
//       break;

//     default:
//       break;
//   }
//   return null;
// }

// const testButtons = (
//   <div>
//     <button>button 1</button>
//     <button>button 2</button>
//   </div>
// );

// storiesOf('Form')
//   .add('<Form />', () => <Form onSubmit={testSubmit} validate={testValidate} fields={testData} />)
//   .add('Custom Buttons', () => <Form onSubmit={testSubmit} validate={testValidate} buttons={testButtons} fields={testData} />);
