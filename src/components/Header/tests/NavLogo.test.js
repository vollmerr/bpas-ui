import React from 'react';
import renderer from 'react-test-renderer';
import { testRouter } from '../../../utils/testUtils.js';
import NavLogo from '../NavLogo';

describe('<NavLogo />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      testRouter(<NavLogo />)
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  xit('passes the correct props down', () => {});
});
