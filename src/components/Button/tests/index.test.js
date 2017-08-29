import React from 'react';
import { shallow } from 'enzyme';
import { testText, testClass, testFunc } from '../../util/tests';
import Button from '../';

/* eslint no-undef: 0 */
describe('<Button />', () => {
  let actual;
  beforeEach(() => {
    actual = shallow(
      <Button
        text={testText}
        onClick={testFunc}
      />,
    );
  });

  it('should render a single button', () => {
    expect(actual.find('button').length).toEqual(1);
  });

  it('should render the button text using the `text` prop', () => {
    expect(actual.find('button').text()).toEqual(testText);
  });

  xit('should style based off the `styleType` prop', () => {
    // TODO TEST
  });

  it('should call the `onClick` prop when clicking the button', () => {
    const expected = jest.fn();
    actual.setProps({ onClick: testFunc(expected) });
    actual.find('button').simulate('click');
    expect(expected.mock.calls.length).toBe(1);
  });

  it('should adopt a `className`', () => {
    actual.setProps({ className: testClass });
    expect(actual.find('button').hasClass(testClass)).toBe(true);
  });
});
