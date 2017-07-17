import React from 'react';
import renderer from 'react-test-renderer';
import { testRouter } from '../../../utils/testUtils.js';
import Footer from '../';

process.env.VERSION = 'test 123';

describe('<Footer />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      testRouter(<Footer />)
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
