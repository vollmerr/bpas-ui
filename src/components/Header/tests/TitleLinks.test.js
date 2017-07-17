import React from 'react';
import { shallow } from 'enzyme';
import TitleLinks from '../TitleLinks';

describe('<TitleLinks />', () => {
  it('renders correctly', () => {
    const tree = shallow(
      <TitleLinks />,
      { context: {history: {}} }
    );
    expect(tree).toMatchSnapshot();
  });

  xit('passes the correct props down', () => {});
});
