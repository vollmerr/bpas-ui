import React from 'react';
import { shallow } from 'enzyme';
import NavMobile from '../NavMobile';

describe('<NavMobile />', () => {
  it('renders correctly', () => {
    const actual = shallow(
      <NavMobile />
    );
    expect(actual).toMatchSnapshot();
  });
});
