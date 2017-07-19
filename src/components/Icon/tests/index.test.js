import React from 'react';
import { shallow } from 'enzyme';
import Icon from '../';

const testIcon = 'home';

describe('<Icon />', () => {
  it('renders correctly', () => {
    const actual = shallow(
      <Icon icon={testIcon} />
    );
    expect(actual).toMatchSnapshot();
  });
});
