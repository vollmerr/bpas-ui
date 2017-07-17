import React from 'react';
import { shallow } from 'enzyme';
import NavLinks from '../NavLinks';

describe.only('<NavLinks />', () => {
  it('renders correctly', () => {
    const tree = shallow(
      <NavLinks />,
      { context: {history: {}} }
    );
    expect(tree).toMatchSnapshot();
  });

  xit('maps over links passed in', () => {});

  xit('passes the correct props down', () => {});
});
