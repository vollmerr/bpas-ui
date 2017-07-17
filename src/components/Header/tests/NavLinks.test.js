import React from 'react';
import renderer from 'react-test-renderer';
import { testRouter } from '../../../utils/testUtils.js';
import NavLinks from '../NavLinks';

describe('<NavLinks />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      testRouter(<NavLinks />)
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  xit('maps over links passed in', () => {});

  xit('passes the correct props down', () => {});
});
