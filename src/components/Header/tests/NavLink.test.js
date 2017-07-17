import React from 'react';
import renderer from 'react-test-renderer';
import { testRouter } from '../../../utils/testUtils.js';
import NavLink from '../NavLink';

const testLink = {
  text: 'test text',
  href: '/test-href',
  icon: 'home',
};

describe('<NavLink />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      testRouter(<NavLink link={testLink} />)
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  xit('adds the active class when active', () => {});

  xit('passes the correct props down', () => {});
});
