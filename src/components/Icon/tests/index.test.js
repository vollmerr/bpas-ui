import React from 'react';
import { shallow } from 'enzyme';
import Icon from '../';

const testIcon = 'home';

describe('<Icon />', () => {
  it('renders correctly', () => {
    const tree = shallow(
      <Icon icon={testIcon} />
    );
    expect(tree).toMatchSnapshot();
  });

  xit('passes the correct props down', () => {});
});
