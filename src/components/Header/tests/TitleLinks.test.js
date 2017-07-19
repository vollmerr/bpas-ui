import React from 'react';
import { shallow } from 'enzyme';
import TitleLinks from '../TitleLinks';

describe('<TitleLinks />', () => {
  it('renders correctly', () => {
    const actual = shallow(
      <TitleLinks />,
      { context: {history: {}} }
    );
    expect(actual).toMatchSnapshot();
  });
});
