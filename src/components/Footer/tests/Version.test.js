import React from 'react';
import renderer from 'react-test-renderer';
import Version from '../Version';

process.env.VERSION = 'test 123';

describe('<Version />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Version />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
