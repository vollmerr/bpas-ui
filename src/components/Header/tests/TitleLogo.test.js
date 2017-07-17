import React from 'react';
import renderer from 'react-test-renderer';
import TitleLogo from '../TitleLogo';

describe('<TitleLogo />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <TitleLogo />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  xit('passes the correct props down', () => {});
});
