import React from 'react';
import renderer from 'react-test-renderer';
import { testRouter } from '../../../utils/testUtils.js';
import NavBar from '../NavBar';

describe('<NavBar />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      testRouter(<NavBar />)
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  xit('hides NavMobile when isMobile', () => {});

  xit('displays NavLinks when mobileNavVisible or NOT isMobile', () => {});

  xit('passes the correct props down', () => {});
});
