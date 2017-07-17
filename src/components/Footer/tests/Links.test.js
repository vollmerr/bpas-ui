import React from 'react';
import { shallow } from 'enzyme';
import Links from '../Links';

describe('<Links />', () => {
  it('renders correctly', () => {
    const tree = shallow(
      <Links />,
      { context: {history: {}} }
    );
    expect(tree).toMatchSnapshot();
  });
});
