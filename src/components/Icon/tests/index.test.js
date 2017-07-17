import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../';

const testIcon = 'home';

describe('<Icon />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Icon icon={testIcon} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  xit('passes the correct props down', () => {});
});
