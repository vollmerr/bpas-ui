// import React from 'react';
// import { storiesOf } from '@storybook/react';
// import { Wizard, Form } from 'bpas-ui';

// const testData = [
//   {
//     test1: {
//       onChange: () => {console.log('custom change!')},
//       onBlur: () => {console.log('custom onBlur!')},
//       name: 'test1',
//       label: 'Test 1 Label',
//       value: '',
//       disabled: false,
//       placeholder: 'Test Placeholder',
//       validation: ['REQUIRED'],
//       error: '',
//       visible: true,
//       tooltip: 'test tooltip.',
//       icon: true,
//     },
//     test2: {
//       onChange: () => {},
//       onBlur: () => {},
//       name: 'test2',
//       label: 'Test 2 Label',
//       value: 'preloaded data',
//       disabled: false,
//       placeholder: 'Test Placeholder 2',
//       validation: ['test1'],
//       error: '',
//       visible: true,
//     },
//   }, {
//     test3: {
//       onChange: () => {console.log('custom change!')},
//       onBlur: () => {console.log('custom onBlur!')},
//       name: 'test3',
//       label: 'Test 3 Label',
//       value: '',
//       disabled: false,
//       placeholder: 'Test 3 Placeholder',
//       validation: ['REQUIRED'],
//       error: '',
//       visible: true,
//       tooltip: 'test 3 tooltip.',
//       icon: true,
//     },
//     test4: {
//       onChange: () => {},
//       onBlur: () => {},
//       name: 'test4',
//       label: 'Test 4 Label',
//       value: 'preloaded data',
//       disabled: false,
//       placeholder: 'Test Placeholder 4',
//       validation: [],
//       error: '',
//       visible: true,
//     },
//   }
// ];


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

// const Page1 = (props) => <Form validate={testValidate} {...props} />;
// const Page2 = (props) => <Form validate={testValidate} {...props} />;

// const testPages = [
//   Page1,
//   Page2,
// ];

// storiesOf('Wizard')
//   .add('<Wizard />', () => <Wizard onSubmit={testSubmit} pages={testPages} data={testData} />);
