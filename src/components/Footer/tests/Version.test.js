import React from 'react';
import { shallow } from 'enzyme';
import Version from '../Version';

process.env.VERSION = 'test 123';

describe('<Version />', () => {
  it('renders correctly', () => {
    const actual = shallow(
      <Version />
    );
    expect(actual).toMatchSnapshot();
  });
});
