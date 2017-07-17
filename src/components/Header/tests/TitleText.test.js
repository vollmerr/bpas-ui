import React from 'react';
import renderer from 'react-test-renderer';
import TitleText from '../TitleText';

const testTitle = 'test title';

describe('<TitleText />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <TitleText title={testTitle} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
