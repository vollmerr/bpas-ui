import React from 'react';
import { shallow } from 'enzyme';
import TitleLogo from '../TitleLogo';

describe('<TitleLogo />', () => {
  it('renders correctly', () => {
    const tree = shallow(
      <TitleLogo />
    );
    expect(tree).toMatchSnapshot();
  });

  xit('passes the correct props down', () => {});
});
