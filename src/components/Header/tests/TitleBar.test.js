import React from 'react';
import { shallow } from 'enzyme';
import TitleBar from '../TitleBar';

const testTitle = 'test title';

describe('<TitleBar />', () => {
  it('renders correctly', () => {
    const tree = shallow(
      <TitleBar title={testTitle} />,
      { context: {history: {}} }
    );
    expect(tree).toMatchSnapshot();
  });

  xit('hides TitleText when isMobile', () => {});

  xit('passes the correct props down', () => {});
});
