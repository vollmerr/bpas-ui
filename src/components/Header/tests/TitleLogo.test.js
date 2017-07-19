import React from 'react';
import { shallow } from 'enzyme';
import TitleLogo from '../TitleLogo';

describe('<TitleLogo />', () => {
  it('renders correctly', () => {
    const actual = shallow(
      <TitleLogo />
    );
    expect(actual).toMatchSnapshot();
  });
});
