import React from 'react';
import { shallow } from 'enzyme';
import NavLinks from '../NavLinks';
import NavLink from '../NavLink';

const testLinks = [
    { text: 'TEST 1', href: '/sada', icon: 'phone' },
    { text: 'test 2', href: '/', icon: 'capitol' },
    { text: 'test 3', href: '/as', icon: 'menu' },
    { text: '$%^&*()', href: '/stuff-asd', icon: 'logo' },
];

describe('<NavLinks />', () => {
  let actual;
  beforeEach(() => {
    actual = shallow(
      <NavLinks />,
      { context: {history: {}} }
    );
  });

  it('renders correctly', () => {
    expect(actual).toMatchSnapshot();

    actual.setProps({links: testLinks});
    expect(actual).toMatchSnapshot();
  });

  it('maps over links passed in', () => {
    expect(actual.find(NavLink).length).toEqual(2);

    actual.setProps({links: testLinks});
    expect(actual.find(NavLink).length).toEqual(4);
  });
});
