import React from 'react';
import renderer from 'react-test-renderer';
import NavMobile from '../NavMobile';

describe('<NavMobile />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <NavMobile />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  xit('passes the correct props down', () => {});
});
