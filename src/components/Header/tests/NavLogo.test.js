import React from 'react';
import { shallow } from 'enzyme';
import NavLogo from '../NavLogo';

describe('<NavLogo />', () => {
  it('renders correctly', () => {
    const tree = shallow(
      <NavLogo />,
      { context: {history: {}} }
    );
    expect(tree).toMatchSnapshot();
  });

  xit('passes the correct props down', () => {});
});
