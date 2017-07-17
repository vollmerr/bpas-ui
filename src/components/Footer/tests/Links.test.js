import React from 'react';
import renderer from 'react-test-renderer';
import { testRouter } from '../../../utils/testUtils.js';
import Links from '../Links';

describe('<Links />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      testRouter(<Links />)
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
