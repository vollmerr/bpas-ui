import React from 'react';
import { shallow } from 'enzyme';
import NavMobile from '../NavMobile';

describe('<NavMobile />', () => {
  it('renders correctly', () => {
    const tree = shallow(
      <NavMobile />
    );
    expect(tree).toMatchSnapshot();
  });

  xit('passes the correct props down', () => {});
});
