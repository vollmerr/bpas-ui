import React from 'react';
import { shallow } from 'enzyme';
import Links from '../Links';

describe('<Links />', () => {

  let actual;
  beforeEach(() => {
    actual = shallow(
      <Links />,
      { context: {history: {}} }
    );
  });

  it('renders correctly', () => {
    expect(actual).toMatchSnapshot();
  });
});
