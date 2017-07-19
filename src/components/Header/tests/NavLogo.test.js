import React from 'react';
import { shallow } from 'enzyme';
import NavLogo from '../NavLogo';

describe('<NavLogo />', () => {
  it('renders correctly', () => {
    const actual = shallow(
      <NavLogo />,
      { context: {history: {}} }
    );
    expect(actual).toMatchSnapshot();
  });
});
