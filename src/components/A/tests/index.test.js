import React from 'react';
import { shallow, render } from 'enzyme';
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
describe('<A />', () => {
  let actual;
  beforeEach(() => {
    actual = shallow(
      <A href={testInternalLink}>
        <TestNode />
      </A>,
    );
  });

  it('should render a single `a` tag for external links', () => {
    actual.setProps({ href: testExternalLink });
    expect(actual.find('a').length).toEqual(1);
  });

  it('should render a `Link` for internal links', () => {
    expect(actual.find('Link').length).toEqual(1);
  });

  it('should render it`s children', () => {
    expect(actual.find(TestNode).length).toEqual(1);
  });

  it('It should set the `href` on external links', () => {
    actual.setProps({ href: testExternalLink });
    expect(actual.find('a').prop('href')).toEqual(testExternalLink);
  });

  it('It should set `to` on internal links', () => {
    expect(actual.find('Link').prop('to')).toEqual(testInternalLink);
  });

  it('should adopt a `className`', () => {
    actual.setProps({ className: testClass });
    expect(actual.find('Link').hasClass(testClass)).toBe(true);
    actual.setProps({ href: testExternalLink });
    expect(actual.find('a').hasClass(testClass)).toBe(true);
  });
});
