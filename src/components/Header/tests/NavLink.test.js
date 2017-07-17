import React from 'react';
import { shallow } from 'enzyme';
import NavLink from '../NavLink';

const testLink = {
  text: 'test text',
  href: '/test-href',
  icon: 'home',
};

describe('<NavLink />', () => {
  it('renders correctly', () => {
    const tree = shallow(
      <NavLink link={testLink} />,
      { context: {history: {}} }
    );
    expect(tree).toMatchSnapshot();
  });

  xit('adds the active class when active', () => {});

  xit('passes the correct props down', () => {});
});
