import React from 'react';
import { shallow } from 'enzyme';
import {
  testText,
  testClass,
  testFunc,
  testExternalLink,
  testInternalLink,
} from '../../util/tests';
import A from '../';

const TestNode = () => <p>test</p>;

/* eslint no-undef: 0 */
describe.only('<A />', () => {
  let actual;
  beforeEach(() => {
    actual = shallow(
      <A href={testInternalLink}>
        <TestNode />
      </A>,
    );
  });

  it('should render a single anchor', () => {
    expect(actual.find('a').length).toEqual(1);
  });

  it('should render it`s children', () => {
    expect(actual.find(TestNode).length).toEqual(1);
  });

  it('It should handle external links', () => {
    actual.find('a').simulate('click');
    console.log('waa')
  });

  xit('It should handle internal links', () => {
    // TODO TEST
  });

  it('should adopt a `className`', () => {
    actual.setProps({ className: testClass });
    expect(actual.find('a').hasClass(testClass)).toBe(true);
  });
});
