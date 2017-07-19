import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../NavBar';
import NavMobile from '../NavMobile';
import NavLinks from '../NavLinks';

describe('<NavBar />', () => {

  let actual;
  beforeEach(() => {
    actual = shallow(
      <NavBar />,
      { context: {history: {}} }
    );
  });

  it('renders correctly', () => {
    expect(actual).toMatchSnapshot();
  });

  it('hides NavMobile when isMobile', () => {
    actual.setProps({isMobile: false});
    expect(actual.find(NavMobile).length).toEqual(0);

    actual.setProps({isMobile: true});
    expect(actual.find(NavMobile).length).toEqual(1);
  });

  it('displays NavLinks when mobileNavVisible or NOT isMobile', () => {
    actual.setProps({isMobile: false});
    expect(actual.find(NavLinks).length).toEqual(1);

    actual.setProps({mobileNavVisible: true});
    expect(actual.find(NavLinks).length).toEqual(1);

    actual.setProps({isMobile: true});
    actual.setProps({mobileNavVisible: false});
    expect(actual.find(NavLinks).length).toEqual(0);
  });
});
