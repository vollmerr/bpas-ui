import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../NavBar';

describe('<NavBar />', () => {
  it('renders correctly', () => {
    const tree = shallow(
      <NavBar />,
      { context: {history: {}} }
    );
    expect(tree).toMatchSnapshot();
  });

  xit('hides NavMobile when isMobile', () => {});

  xit('displays NavLinks when mobileNavVisible or NOT isMobile', () => {});

  xit('passes the correct props down', () => {});
});
